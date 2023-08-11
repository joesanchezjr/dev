import prisma from "@/lib/prisma";

import { Suspense } from "react";
import { TaskList } from "@/app/projects/tasks/_list";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks",
};

const getRemoteTasks = async () => {
  try {
    const tasks = await prisma.task.findMany({ where: { deletedAt: null } });
    console.log("DEBUG+ tasks", tasks);
    return tasks;
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
};

export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const tasks = await getRemoteTasks();

  console.log("DEBUG+ component render");

  return (
    <>
      <div className="max-width">
        <Suspense fallback={<div className="my-24">Loading tasks...</div>}>
          <TaskList tasks={tasks} />
        </Suspense>
      </div>
    </>
  );
}
