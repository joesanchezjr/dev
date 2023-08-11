"use client";

import { Task, useTasks } from "@/context/tasks-context/tasks-context";
import { useState } from "react";

export function TaskItem({ task }: { task: Task }) {
  const [editedTaskInput, setEditedTaskInput] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);
  const { updateTask, deleteTask } = useTasks();

  const handleEditSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTask({
      ...task,
      text: editedTaskInput,
    });
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedTaskInput(task.text);
  };

  let taskContent;
  if (isEditing) {
    taskContent = (
      <form onSubmit={handleEditSave}>
        <input value={editedTaskInput} onChange={handleEditCancel} />
        <button type="submit">Save</button>
        <button onClick={handleEditCancel}>Cancel</button>
      </form>
    );
  } else {
    taskContent = (
      <>
        <span>
          {task.id} - {task.text}
        </span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  if (isEditing) {
    return (
      <>
        <div>
          <input
            type="checkbox"
            checked={task.complete}
            aria-disabled
            className="pointer-events-none cursor-not-allowed opacity-30"
            aria-label="Task checkbox not available while editing"
          />
        </div>
        <form onSubmit={handleEditSave}>
          <input value={editedTaskInput} onChange={handleEditCancel} />
          <button type="submit">Save</button>
          <button onClick={handleEditCancel}>Cancel</button>
        </form>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </>
    );
  }

  return (
    <>
      <label className="space-x-2">
        <input
          type="checkbox"
          checked={task.complete}
          onChange={(e) => {
            updateTask({
              ...task,
              complete: e.target.checked,
            });
          }}
        />
        <span>
          {task.id} - {task.text}
        </span>
      </label>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );
}
