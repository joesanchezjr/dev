"use client";

import { TaskItem } from "@/app/projects/tasks/_task";
import { useTasks } from "@/context/tasks-context/tasks-context";
import { Task } from "@prisma/client";
import React from "react";

export function TaskList({ tasks: _tasks }: { tasks: Task[] }) {
  const [newTask, setNewTask] = React.useState("");

  const { tasks, createTask } = useTasks(_tasks);

  const handleAddNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask) return;
    createTask({ title: newTask });
    setNewTask("");
  };

  return (
    <div className="my-24">
      <h1 className="mb-4 text-xl font-medium">Tasks</h1>

      <form onSubmit={handleAddNewTask}>
        <label className="mb-2 block" htmlFor="new-task">
          New Task
        </label>
        <div className="space-y-2 sm:space-x-2 sm:space-y-0">
          <input
            className="mb-4 w-full rounded border border-slate-300 p-2 placeholder:text-slate-800 dark:border-slate-800 dark:bg-slate-950 sm:w-auto"
            id="new-task"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Do laundry"
          />
          <button
            className="rounded bg-blue-600 px-4 py-2 text-white"
            type="submit"
          >
            Add Task
          </button>
          <button
            className="rounded bg-blue-600 px-4 py-2 text-white"
            type="button"
            onClick={() => {
              setNewTask("");
            }}
          >
            Clear
          </button>
        </div>
      </form>
      <ul className="prose space-y-2 dark:prose-invert">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
