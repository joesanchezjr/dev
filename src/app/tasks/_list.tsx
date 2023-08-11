"use client";

import { useTasks } from "@/context/tasks-context/tasks-context";

export function TaskList() {
  const { tasks } = useTasks();
  return (
    <div className="my-24">
      <h1 className="mb-4 text-xl font-medium">Tasks</h1>
      <ul className="prose space-y-2">
        {tasks?.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
