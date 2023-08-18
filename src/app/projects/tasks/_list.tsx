"use client";

import { TaskItem } from "@/app/projects/tasks/_task";
import { useTasks } from "@/context/tasks-context/tasks-context";
import { Task } from "@prisma/client";
import React from "react";

export function TaskList({ tasks: _tasks }: { tasks: Task[] }) {
  const [showDeleted, setShowDeleted] = React.useState(false);
  const [newTask, setNewTask] = React.useState("");

  const { tasks, createTask } = useTasks(_tasks);

  const handleAddNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask) return;
    createTask({ title: newTask });
    setNewTask("");
  };

  return (
    <div className="mb-12">
      <h1 className="mb-4 text-xl font-medium">Tasks</h1>

      <form onSubmit={handleAddNewTask} className="mb-12">
        <label className="mb-2 block" htmlFor="new-task">
          New Task
        </label>
        <div className="flex flex-col gap-2 sm:flex-row ">
          <input
            className="w-full rounded border border-slate-300 p-2 placeholder:text-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-800 sm:w-auto"
            id="new-task"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Do laundry"
          />
          <div className="flex justify-end gap-2 sm:items-start">
            <button
              className="order-2 rounded border border-slate-600 bg-slate-600 px-4 py-2 text-white focus:outline-offset-2 sm:order-1"
              type="submit"
            >
              Add Task
            </button>
            {newTask && (
              <button
                className="order-1 rounded border border-slate-600 px-4 py-2 text-black  dark:text-white sm:order-2"
                type="button"
                onClick={() => {
                  setNewTask("");
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="flex max-w-md flex-col">
        <button
          className="self-end rounded border border-blue-600 px-2 py-1 text-xs text-black dark:text-white"
          type="button"
          onClick={() => setShowDeleted(!showDeleted)}
        >
          {showDeleted ? "Hide" : "Show"} deleted
        </button>
        <ul className="prose mt-8 space-y-2 dark:prose-invert">
          {tasks
            .filter((task) => showDeleted || !task.deletedAt)
            .map((task) => (
              <li key={task.id} className="flex flex-wrap gap-2">
                <TaskItem task={task} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
