import { PasswordGuard } from "@/components/password";
import { TasksProvider } from "@/context/tasks-context/tasks-provider";
import { IS_DEV } from "@/utils/constants";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (IS_DEV) {
    return <TasksProvider>{children}</TasksProvider>;
  }
  return (
    <TasksProvider>
      <PasswordGuard>{children}</PasswordGuard>
    </TasksProvider>
  );
}
