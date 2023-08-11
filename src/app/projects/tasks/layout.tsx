import { TasksProvider } from "@/context/tasks-context/tasks-provider";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TasksProvider>
      <div className="max-width">
        The Tasks Context is only available when the url is /projects/tasks/** - leaving
        or refreshing the route will clear the context
      </div>
      {children}
    </TasksProvider>
  );
}
