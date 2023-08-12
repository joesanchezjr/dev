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

      <form onSubmit={handleAddNewTask} className="mb-12">
        <label className="mb-2 block" htmlFor="new-task">
          New Task
        </label>
        <div className="flex flex-col gap-2 sm:flex-row ">
          <input
            className="w-full rounded border border-slate-300 p-2 placeholder:text-slate-800 dark:border-slate-800 dark:bg-slate-950 sm:w-auto"
            id="new-task"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Do laundry"
          />
          <div className="flex justify-end gap-2 sm:items-start">
            {newTask && (
              <button
                className="rounded border border-blue-600 px-4 py-2 text-white"
                type="button"
                onClick={() => {
                  setNewTask("");
                }}
              >
                Clear
              </button>
            )}
            <button
              className="rounded border border-blue-600 bg-blue-600 px-4 py-2 text-white"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
      <ul className="prose space-y-2 dark:prose-invert">
        {tasks.map((task) => (
          <li key={task.id} className="flex flex-wrap gap-2">
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
