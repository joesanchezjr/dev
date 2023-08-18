"use client";
import React from "react";

import { useTasks } from "@/context/tasks-context/tasks-context";

export function CreateItem() {
  const [newTask, setNewTask] = React.useState("");

  const { createTask } = useTasks();

  const handleAddNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask) return;
    createTask({ title: newTask });
    setNewTask("");
  };

  return (
    <>
      <div className="my-8">
        <form onSubmit={handleAddNewTask} className="w-full">
          <label className="mb-1 block text-xs" htmlFor="new-task">
            Create new task
          </label>
          <div className="flex flex-col gap-2 text-sm sm:flex-row">
            <input
              className="w-full rounded border border-slate-300 px-2 py-1 placeholder:text-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-800"
              id="new-task"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Go for a walk"
            />
            <div className="flex flex-shrink-0 flex-grow justify-end gap-2 sm:items-stretch">
              <button
                className="order-2 rounded border border-slate-600 bg-slate-600 px-2 py-1 text-white focus:outline-offset-2 sm:order-1"
                type="submit"
              >
                Add Task
              </button>
              {newTask && (
                <button
                  className="order-1 rounded border border-slate-600 px-2 py-1 text-black  dark:text-white sm:order-2"
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
      </div>
    </>
  );
}
