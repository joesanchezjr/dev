// https://react.dev/reference/react/useReducer
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://kentcdodds.com/blog/how-to-optimize-your-context-value << not yet implemented (not needed unless beceomes a performance issue)

import * as React from "react";

// type CloseAction = { type: "close"; payload: { showSidebar: boolean } }; // example of action with payload

type Action = { type: "open" } | { type: "close" };
type Dispatch = (action: Action) => void;
type State = { unlocked: boolean };
type AppProviderProps = { children: React.ReactNode };
type Context = { state: State; dispatch: Dispatch } | undefined;

const initialState = { unlocked: false };

const AppContext = React.createContext<Context>(undefined);

function appReducer(_: State, action: Action) {
  switch (action.type) {
    case "open": {
      return { unlocked: true };
    }
    case "close": {
      return { unlocked: false };
    }
  }
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = React.useReducer(appReducer, initialState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
