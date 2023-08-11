"use client";

import { Task, useTasks } from "@/context/tasks-context/tasks-context";
import { useState } from "react";

export function TaskItem({ task }: { task: Task }) {
  const [editedTaskInput, setEditedTaskInput] = useState(task.title);
  const [isEditing, setIsEditing] = useState(false);
  const { updateTask, deleteTask } = useTasks();

  const handleEditSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTask({
      ...task,
      title: editedTaskInput,
    });
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedTaskInput(task.title);
  };

  if (isEditing) {
    return (
      <>
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            aria-disabled
            className="pointer-events-none cursor-not-allowed opacity-30"
            aria-label="Task checkbox not available while editing"
          />
        </div>
        <form onSubmit={handleEditSave}>
          <input
            value={editedTaskInput}
            onChange={(e) => setEditedTaskInput(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={handleEditCancel}>Cancel</button>
        </form>
        <button onClick={() => deleteTask(task)}>Delete</button>
      </>
    );
  }

  return (
    <>
      <label className="space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            updateTask({
              ...task,
              completed: e.target.checked,
            });
          }}
        />
        <span>
          {task.id} - {task.title}
        </span>
      </label>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </>
  );
}
