import * as React from "react";

type Action = { type: "open" } | { type: "close" } | { type: string };
type Dispatch = (action: Action) => void;
type State = { showSidebar: boolean };
type AppProviderProps = { children: React.ReactNode };
type Context = { state: State; dispatch: Dispatch } | undefined;

function sidebarReducer(state: State, action: Action) {
  switch (action.type) {
    case "open": {
      return { showSidebar: true };
    }
    case "close": {
      return { showSidebar: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const AppContext = React.createContext<Context>(undefined);

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = React.useReducer(sidebarReducer, {
    showSidebar: false,
  });

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
