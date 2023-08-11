"use client";

import { TasksProvider } from "@/context/tasks-context/tasks-context";
import { AppProvider } from "./app-context/app-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <TasksProvider>{children}</TasksProvider>
    </AppProvider>
  );
}
