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

type CreateTaskPayload = {
  id: number;
  text: string;
};
type UpdateTaskPayload = {
  id: number;
  text: string;
  complete: boolean;
};
type DeleteTaskPayload = {
  id: number;
};

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

export type Task = { id: number; text: string; complete: boolean };

type State = Task[];
type Action = CreateTaskAction | UpdateTaskAction | DeleteTaskAction;
type Dispatch = (action: Action) => void;
type Context = { state: State; dispatch: Dispatch } | undefined;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
const initialState: State = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  text: `Task #${i + 1}`,
  complete: false,
}));

const TasksContext = React.createContext<Context>(undefined);

function tasksReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.Create: {
      const { id, text } = action.task;
      return [
        ...state,
        {
          id,
          text,
          complete: false,
        },
      ];
    }
    case ActionTypes.Update: {
      const { id, text, complete } = action.task;
      return state.map((t) => {
        if (t.id === id) {
          return { id, text, complete };
        } else {
          return t;
        }
      });
    }
    case ActionTypes.Delete: {
      const { id } = action.task;
      return state.filter((t) => t.id !== id);
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

export function useTasks() {
  const context = React.useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an TasksContext");
  }
  const { dispatch } = context;

  const createTask = (task: CreateTaskPayload) => {
    try {
      // create task on server, await response, then create task locally
      dispatch({ type: ActionTypes.Create, task });
    } catch (error) {}
  };

  const updateTask = (task: UpdateTaskPayload) => {
    try {
      // update task on server, await response, then update task locally
      dispatch({ type: ActionTypes.Update, task });
    } catch (error) {}
  };

  const deleteTask = (taskId: DeleteTaskPayload["id"]) => {
    try {
      // delete task from server, await response, then delete task locally
      dispatch({ type: ActionTypes.Delete, task: { id: taskId } });
    } catch (error) {}
  };

  return { tasks: context.state, createTask, updateTask, deleteTask };
}
