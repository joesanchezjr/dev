import { Suspense } from "react";
import { TaskList } from "@/app/projects/tasks/_list";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks",
};

export default function TasksPage() {
  return (
    <>
      <div className="max-width">
        <Suspense fallback={<div>Loading tasks...</div>}>
          <TaskList />
        </Suspense>
      </div>
    </>
  );
}
