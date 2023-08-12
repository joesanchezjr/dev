import { Toaster } from "react-hot-toast";
import { PasswordGuard } from "@/components/password";
import { TasksProvider } from "@/context/tasks-context/tasks-provider";
import { IS_DEV } from "@/utils/constants";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (IS_DEV) {
    return (
      <TasksProvider>
        <Toaster />
        {children}
      </TasksProvider>
    );
  }
  return (
    <TasksProvider>
      <PasswordGuard>
        <Toaster toastOptions={{ position: "bottom-center" }} />
        {children}
      </PasswordGuard>
    </TasksProvider>
  );
}
