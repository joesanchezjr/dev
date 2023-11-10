import { Card } from "@/components/card/card";
import { formatDate } from "@/utils/format-date";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import title from "title";

export function EngineeringNotes({ showAll }: { showAll?: boolean }) {
  const sortedPosts = allPosts.sort((a, z) =>
    compareDesc(new Date(a.date), new Date(z.date)),
  );
  const postsToShow = showAll ? sortedPosts : sortedPosts.slice(0, 5);

  // @todo: organize by year if more than one year of posts

  return (
    <Card
      variant="outline"
      className="mb-12"
      withPadding
      title="Engineering Notes"
      dotColor="rose"
    >
      <ul role="list" className="-ml-1 space-y-6">
        {postsToShow.map((post, index) => (
          <li key={post.title}>
            <Link href={post.slug} className="relative flex gap-x-1">
              <div
                className={clsx(
                  index === postsToShow.length - 1 ? "h-6" : "-bottom-6",
                  "absolute left-0 top-0 flex w-4 justify-center",
                )}
              >
                <div className="w-px bg-slate-200 dark:bg-slate-800" />
              </div>

              <div className="relative flex h-6 w-4 flex-none items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 ring-1 ring-slate-300 dark:bg-slate-800 dark:ring-slate-700" />
              </div>
              <div className="flex w-full flex-col md:flex-row md:justify-between md:gap-2">
                <time
                  dateTime={post.date}
                  className="flex-none py-0.5 text-xs leading-5 tracking-tight text-slate-500 md:order-2"
                >
                  {formatDate(post.date, "MMM dd")}
                </time>
                <p className="max-w-[85ch] flex-auto space-x-2 py-0.5 leading-5">
                  <span className="font-medium text-black dark:text-white">
                    {post.overrideTitleCasing ? post.title : title(post.title)}
                  </span>
                  <span>{post.description}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
