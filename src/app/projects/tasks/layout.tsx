import { Toaster } from "react-hot-toast";
import { PasswordGuard } from "@/components/password";
import { TasksProvider } from "@/context/tasks-context/tasks-provider";
import { IS_DEV, navigations } from "@/utils/constants";
import { redirect } from "next/navigation";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!navigations.main.find((nav) => nav.name === "Projects")) {
    redirect("/");
  }
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
