"use client";

import { Task, useTasks } from "@/context/tasks-context/tasks-context";
import { useState } from "react";
import toast from "react-hot-toast";

// @todo: edit should open up a modal

export function TaskItem({ task }: { task: Task }) {
  const [editedTaskInput, setEditedTaskInput] = useState(task.title);
  const [isEditing, setIsEditing] = useState(false);
  const { updateTask, deleteTask } = useTasks();

  const handleEditSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTaskInput === task.title) {
      toast("no changes made");
      setIsEditing(false);
      return;
    }
    updateTask({
      ...task,
      title: editedTaskInput,
    });
    setIsEditing(false);
  };

  const handleRestoreTask = () => updateTask({ ...task, deletedAt: null });

  const handleTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTask({
      ...task,
      completed: e.target.checked,
    });
  };

  const handleEditStart = () => setIsEditing(true);

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedTaskInput(task.title);
  };

  const handleDelete = () => {
    deleteTask(task);
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
            readOnly
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
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  }

  if (task.deletedAt) {
    return (
      <div className="space-x-2 line-through">
        <label className="space-x-2 opacity-20">
          <input
            type="checkbox"
            checked={task.completed}
            aria-disabled
            className="pointer-events-none cursor-not-allowed "
            aria-label="Task checkbox not available on deleted tasks"
            readOnly
          />
          <span>
            {task.id} - {task.title}
          </span>
        </label>
        <button onClick={handleRestoreTask}>Restore</button>
      </div>
    );
  }

  if (task.completed) {
    return (
      <>
        <label className="cursor-pointer space-x-2 line-through opacity-30">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleTaskStatus}
          />
          <span>
            {task.id} - {task.title}
          </span>
        </label>
      </>
    );
  }

  return (
    <>
      <label className="cursor-pointer space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleTaskStatus}
        />
        <span>
          {task.id} - {task.title}
        </span>
      </label>
      <button onClick={handleEditStart}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
