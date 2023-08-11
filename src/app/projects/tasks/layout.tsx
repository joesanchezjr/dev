import { PasswordGuard } from "@/components/password";
import { TasksProvider } from "@/context/tasks-context/tasks-provider";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TasksProvider>
      <PasswordGuard>{children}</PasswordGuard>
    </TasksProvider>
  );
}
