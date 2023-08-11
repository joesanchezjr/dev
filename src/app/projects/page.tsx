import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tasks",
};

export default function TasksPage() {
  return (
    <>
      <div className="max-width my-20">
        <ul>
          <li>
            <Link
              href="/projects/tasks"
              className="rounded-md border border-slate-200 bg-white p-12 shadow-sm transition-shadow hover:cursor-pointer hover:shadow-lg"
            >
              Tasks
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
