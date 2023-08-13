import prisma from "@/lib/prisma";

import { Suspense } from "react";

import { Metadata } from "next";
import { List } from "@/app/projects/tasks/_components/list";

export const metadata: Metadata = {
  title: "Tasks",
};

const getRemoteTasks = async () => {
  try {
    // const tasks = await prisma.task.findMany({
    //   orderBy: [{ completed: "asc" }, { id: "asc" }],
    // });
    const tasks = await prisma.task.findMany({
      orderBy: [{ id: "asc" }],
    });
    return tasks;
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
};

export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const tasks = await getRemoteTasks();

  // @todo: add error handling
  // @todo: add loading state
  // @todo: add empty state
  // @todo: add optimistic ui (useSWR?)
  // @todo: allow for multi delete

  return (
    <>
      <div className="max-width my-24">
        <Suspense fallback={<div className="my-24">Loading tasks...</div>}>
          <List tasks={tasks} />
        </Suspense>
      </div>
    </>
  );
}
