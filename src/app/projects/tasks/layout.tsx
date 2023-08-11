import { TasksProvider } from "@/context/tasks-context/tasks-provider";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TasksProvider>{children}</TasksProvider>;
}
