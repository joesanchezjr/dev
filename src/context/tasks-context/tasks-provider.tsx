"use client";

import { TasksContextProvider } from "@/context/tasks-context/tasks-context";

export function TasksProvider({ children }: { children: React.ReactNode }) {
  return <TasksContextProvider>{children}</TasksContextProvider>;
}
