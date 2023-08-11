// https://react.dev/reference/react/useReducer
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://kentcdodds.com/blog/how-to-optimize-your-context-value << not yet implemented (not needed unless beceomes a performance issue)

import * as React from "react";

enum ActionTypes {
  Create = "CREATE",
  Update = "UPDATE",
  Delete = "DELETE",
}

// Payload Types

type CreateTaskPayload = Task;

type UpdateTaskPayload = Task;

type DeleteTaskPayload = Task;
// Action Types

type CreateTaskAction = {
  type: ActionTypes.Create;
  task: CreateTaskPayload;
};
type UpdateTaskAction = {
  type: ActionTypes.Update;
  task: UpdateTaskPayload;
};
type DeleteTaskAction = {
  type: ActionTypes.Delete;
  task: DeleteTaskPayload;
};

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

type State = Task[];
type Action = CreateTaskAction | UpdateTaskAction | DeleteTaskAction;
type Dispatch = (action: Action) => void;
type Context = { state: State; dispatch: Dispatch } | undefined;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
// const initialState: State = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   title: `Task #${i + 1}`,
//   complete: false,
// }));

const initialState: State = [];

const TasksContext = React.createContext<Context>(undefined);

function tasksReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.Create: {
      return [...state, action.task];
    }
    case ActionTypes.Update: {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case ActionTypes.Delete: {
      // const { id } = action.task;
      // return state.filter((t) => t.id !== id);
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
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

  // @todo: can we make this more efficient by only sorting when needed?
  const sortedTasks = [...state].sort((a, b) => {
    if (a.completed === b.completed) {
      return a.id - b.id;
    } else {
      return a.completed ? 1 : -1;
    }
  });

  const value = { state: sortedTasks, dispatch };

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
        if (state.find((t) => t.id === task.id)) return;
        dispatch({ type: ActionTypes.Create, task });
      });
    }
  }, [tasks]);

  const createTask = async (_task: Pick<CreateTaskPayload, "title">) => {
    try {
      // create task on server, await response, then create task locally
      const res = await fetch("/api/tasks/create", {
        method: "POST",
        body: JSON.stringify(_task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const task: Task = await res.json();
      dispatch({ type: ActionTypes.Create, task });
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (_task: UpdateTaskPayload) => {
    try {
      // create task on server, await response, then create task locally
      const res = await fetch("/api/tasks/update", {
        method: "POST",
        body: JSON.stringify(_task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const task: Task = await res.json();
      dispatch({ type: ActionTypes.Update, task });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (_task: DeleteTaskPayload) => {
    try {
      // create task on server, await response, then create task locally
      const res = await fetch("/api/tasks/delete", {
        method: "DELETE",
        body: JSON.stringify(_task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const task: Task = await res.json();
      dispatch({ type: ActionTypes.Delete, task });
    } catch (error) {
      console.error(error);
    }
  };

  return { tasks: context.state, createTask, updateTask, deleteTask };
}
