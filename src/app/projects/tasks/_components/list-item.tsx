"use client";
import { Task, useTasks } from "@/context/tasks-context/tasks-context";
import clsx from "clsx";
import { set } from "date-fns";
import React, { useState } from "react";
import toast from "react-hot-toast";

type ListItemProps = {
  task: Task;
  isEditing?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave?: (updatedTitle: string) => void;
};

const Checkbox = ({ task, isEditing, onChange }: ListItemProps) => {
  const isDeleted = task.deletedAt !== null;

  if (!isEditing && !isDeleted) {
    return (
      <input
        type="checkbox"
        id={`task-${task.id}`}
        name={`task-${task.id}`}
        className="h-4 w-4 rounded border border-gray-300 text-indigo-600 focus:ring-indigo-600"
        checked={task.completed}
        onChange={onChange}
      />
    );
  }
  return (
    <input
      type="checkbox"
      id={`task-${task.id}`}
      name={`task-${task.id}`}
      className="h-4 w-4 cursor-not-allowed rounded border border-gray-300 text-slate-600 opacity-30 focus:ring-slate-600"
      checked={task.completed}
      onChange={() => {
        // do nothing
        toast.error(
          isDeleted
            ? "Deleted tasks cannot be edited"
            : "Complete status cannot be changed while editing"
        );
      }}
      readOnly
    />
  );
};

const ListItemWithEditableText = ({
  task,
  isEditing,
  onSave,
}: ListItemProps) => {
  const [editedTaskInput, setEditedTaskInput] = useState(task.title);

  React.useEffect(() => {
    !isEditing && setEditedTaskInput(task.title);
  }, [isEditing]);

  const sharedClasses = clsx("py-2 block border-b border-t border-transparent");

  if (!isEditing) {
    const isDeleted = task.deletedAt !== null;
    const classes = clsx(
      sharedClasses,
      "select-none",
      isDeleted && "text-slate-400 dark:text-slate-800",
      task.completed && "line-through text-slate-300 dark:text-slate-600"
    );
    return (
      <label htmlFor={`task-${task.id}`} className={classes}>
        {task.title}
      </label>
    );
  }

  const editingClasses = clsx(
    "w-full select-none rounded border border-slate-300 px-2 py-2 text-sm placeholder:text-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-800"
  );
  return (
    <form
      onSubmit={() => {
        onSave?.(editedTaskInput);
      }}
      id={`task-form-${task.id}`}
    >
      <input
        type="text"
        id={`task-input-${task.id}`}
        name={`task-input-${task.id}`}
        className={editingClasses}
        value={editedTaskInput}
        onChange={(e) => setEditedTaskInput(e.target.value)}
      />
    </form>
  );
};

export function ListItem({ task }: ListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTask, deleteTask } = useTasks();

  const handleEditSave = (updatedText: string) => {
    if (updatedText === task.title) {
      toast("no changes made");
      setIsEditing(false);
      return;
    }
    updateTask({
      ...task,
      title: updatedText,
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
  };

  const handleDelete = () => {
    deleteTask(task);
  };

  const topLevelClasses = clsx("relative flex items-center py-2");

  return (
    <div key={task.id} className={topLevelClasses}>
      <div className="flex-1 text-sm">
        <ListItemWithEditableText
          task={task}
          isEditing={isEditing}
          onSave={(updatedText: string) => handleEditSave(updatedText)}
        />
      </div>
      <div className="ml-3 flex h-6 items-center gap-2">
        {!task.deletedAt &&
          (!isEditing ? (
            <>
              <button onClick={handleEditStart}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          ) : (
            <>
              <button onClick={handleEditCancel}>Cancel</button>
              <button form={`task-form-${task.id}`} type="submit">
                Save
              </button>
            </>
          ))}
        {task.deletedAt && <button onClick={handleRestoreTask}>Restore</button>}
        <Checkbox {...{ onChange: handleTaskStatus, task, isEditing }} />
      </div>
    </div>
  );
}
