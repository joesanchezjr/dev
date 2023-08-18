// https://react.dev/reference/react/useReducer
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://kentcdodds.com/blog/how-to-optimize-your-context-value << not yet implemented (not needed unless beceomes a performance issue)

import * as React from "react";
import toast from "react-hot-toast";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

enum ActionTypes {
  Create,
  CreateLoading,
  CreateCleanUp,
  Update,
  UpdateLoading,
  UpdateCleanUp,
  Delete,
  DeleteLoading,
  DeleteCleanUp,
}

type ActionBase<T, P = Task> = {
  type: T;
  task: P;
};

type TaskWithTitleOnly = Pick<Task, "title">;

type CreateTaskAction = ActionBase<ActionTypes.Create>;
type CreateTaskLoadingAction = ActionBase<
  ActionTypes.CreateLoading,
  TaskWithTitleOnly
>;
type CreateTaskCleanUpAction = ActionBase<ActionTypes.CreateCleanUp>;

type UpdateTaskAction = ActionBase<ActionTypes.Update>;
type UpdateTaskLoadingAction = ActionBase<ActionTypes.UpdateLoading>;
type UpdateTaskCleanUpAction = ActionBase<ActionTypes.UpdateCleanUp>;

type DeleteTaskAction = ActionBase<ActionTypes.Delete>;
type DeleteTaskLoadingAction = ActionBase<ActionTypes.DeleteLoading>;
type DeleteTaskCleanUpAction = ActionBase<ActionTypes.DeleteCleanUp>;

type Action =
  | CreateTaskAction
  | UpdateTaskAction
  | DeleteTaskAction
  | CreateTaskLoadingAction
  | UpdateTaskLoadingAction
  | DeleteTaskLoadingAction
  | CreateTaskCleanUpAction
  | UpdateTaskCleanUpAction
  | DeleteTaskCleanUpAction;

type State = {
  tasks: Task[];
  created: TaskWithTitleOnly[]; // because we don't have the id yet since it is generated on the server
  updated: Task[];
  deleted: Task[];
};

type Dispatch = (action: Action) => void;
type Context = { state: State; dispatch: Dispatch } | undefined;

const initialState: State = {
  tasks: [],
  created: [],
  updated: [],
  deleted: [],
};

const TasksContext = React.createContext<Context>(undefined);

function tasksReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.Create: {
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    }
    case ActionTypes.CreateLoading: {
      return {
        ...state,
        created: [...state.created, action.task],
      };
    }
    case ActionTypes.CreateCleanUp: {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.title === action.task.title) {
            return action.task;
          } else {
            return t;
          }
        }),
        created: state.created.filter((t) => t.title !== action.task.title),
      };
    }
    case ActionTypes.Update: {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        }),
      };
    }
    case ActionTypes.UpdateLoading: {
      return {
        ...state,
        updated: [...state.updated, action.task],
      };
    }
    case ActionTypes.UpdateCleanUp: {
      return {
        ...state,
        updated: state.updated.filter((t) => t.id !== action.task.id),
      };
    }
    case ActionTypes.Delete: {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.task.id),
      };
    }
    case ActionTypes.DeleteLoading: {
      return {
        ...state,
        deleted: [...state.deleted, action.task],
      };
    }
    case ActionTypes.DeleteCleanUp: {
      return {
        ...state,
        deleted: state.deleted.filter((t) => t.id !== action.task.id),
      };
    }
    default: {
      // @ts-expect-error expecting error because all cases are covered, but leaving in case of bad input
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

type TasksProviderProps = { children: React.ReactNode };

export function TasksContextProvider({ children }: TasksProviderProps) {
  const [state, dispatch] = React.useReducer(tasksReducer, initialState);

  const value = { state, dispatch };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export function useTasks(tasks?: Task[]) {
  const ref = React.useRef(false);
  const context = React.useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an TasksContext");
  }
  const { state, dispatch } = context;

  React.useEffect(() => {
    if (tasks && !ref.current) {
      ref.current = true;
      tasks.forEach((task) => {
        if (state.tasks.find((t) => t.id === task.id)) return;
        dispatch({ type: ActionTypes.Create, task });
      });
    }
  }, [tasks]);

  const createTask = async (_task: TaskWithTitleOnly) => {
    dispatch({ type: ActionTypes.CreateLoading, task: _task });
    try {
      // type casting because we know we don't have the id yet but we want to be optimistic
      // maybe we should spread the created array into the tasks array
      dispatch({ type: ActionTypes.Create, task: _task as Task });
      const res = await fetch("/api/tasks/create", {
        method: "POST",
        body: JSON.stringify(_task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const task: Task = await res.json();
      dispatch({ type: ActionTypes.CreateCleanUp, task });
      toast.success("Task created!");
    } catch (error) {
      toast.error("Error creating task");
    }
  };

  const updateTask = async (_task: UpdateTaskAction["task"]) => {
    dispatch({ type: ActionTypes.UpdateLoading, task: _task });
    try {
      dispatch({ type: ActionTypes.Update, task: _task });
      const res = await fetch("/api/tasks/update", {
        method: "POST",
        body: JSON.stringify(_task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const task: Task = await res.json();
      dispatch({ type: ActionTypes.UpdateCleanUp, task });
      toast.success("Task updated!");
    } catch (error) {
      toast.error("Error updating task");
    }
  };

  const deleteTask = async (_task: DeleteTaskAction["task"]) => {
    dispatch({ type: ActionTypes.DeleteLoading, task: _task });
    try {
      dispatch({ type: ActionTypes.Delete, task: _task });
      const res = await fetch("/api/tasks/delete", {
        // should this be an POST?
        method: "DELETE",
        body: JSON.stringify(_task),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 202) {
        console.log("status = 200");
        const task: Task = await res.json();
        console.log("success");
        dispatch({ type: ActionTypes.DeleteCleanUp, task });
        console.log("success 2");
        toast.success("Task deleted");
      }
      if (res.status === 500) {
        toast.error("Task could not be deleted");
        dispatch({ type: ActionTypes.Create, task: _task });
        dispatch({ type: ActionTypes.DeleteCleanUp, task: _task });
      }
    } catch (error) {
      toast.error("Task could not be deleted");
      dispatch({ type: ActionTypes.CreateCleanUp, task: _task });
    }
  };

  return { tasks: context.state.tasks, createTask, updateTask, deleteTask };
}
