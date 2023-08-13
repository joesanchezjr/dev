"use client";
import { CreateItem } from "@/app/projects/tasks/_components/create-item";
import { ListItem } from "@/app/projects/tasks/_components/list-item";
import { useTasks } from "@/context/tasks-context/tasks-context";
import { Task } from "@prisma/client";
import React from "react";

export function List({ tasks: _tasks }: { tasks: Task[] }) {
  const [showDeleted, setShowDeleted] = React.useState(false);

  const { tasks } = useTasks(_tasks);

  return (
    <div className="mx-auto max-w-md">
      <CreateItem />
      <fieldset>
        <div className="flex justify-between">
          <legend className="text-xl font-medium leading-6">Tasks</legend>
          <button
            className="self-end rounded border border-blue-600 px-2 py-1 text-xs text-black dark:text-white"
            type="button"
            onClick={() => setShowDeleted(!showDeleted)}
          >
            {showDeleted ? "Hide" : "Show"} deleted
          </button>
        </div>
        <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          {tasks
            .filter((task) => showDeleted || !task.deletedAt)
            .map((task) => (
              <ListItem key={task.id} task={task} />
            ))}
        </div>
      </fieldset>
    </div>
  );
}
