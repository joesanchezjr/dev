import { CardSection } from "@/components/card/card";
import { formatDate } from "@/utils/format-date";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import title from "title";

export function EngineeringNotes({ showAll }: { showAll?: boolean }) {
  const sortedPosts = allPosts.sort((a, z) =>
    compareDesc(new Date(a.date), new Date(z.date))
  );
  const postsToShow = showAll ? sortedPosts : sortedPosts.slice(0, 5);

  // @todo: organize by year if more than one year of posts

  return (
    <CardSection variant="outline" className="mb-12">
      <div className="mb-4 flex items-start justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
          <span className="h-2 w-2 rounded-full bg-rose-600/60" /> Engineering
          Notes
        </h2>
        {postsToShow.length > 5 && (
          <Link
            href="/notes"
            className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-sm font-medium hover:bg-slate-50"
          >
            All notes <ArrowRightIcon className="inline h-4 w-4" />
          </Link>
        )}
      </div>
      <ul role="list" className="-ml-1 space-y-6">
        {postsToShow.map((post, index) => (
          <li key={post.title}>
            <Link href={post.slug} className="relative flex gap-x-1">
              <div
                className={clsx(
                  index === postsToShow.length - 1 ? "h-6" : "-bottom-6",
                  "absolute left-0 top-0 flex w-4 justify-center"
                )}
              >
                <div className="w-px bg-slate-200" />
              </div>

              <div className="relative flex h-6 w-4 flex-none items-center justify-center bg-slate-50">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 ring-1 ring-gray-300" />
              </div>
              <div className="flex w-full flex-col md:flex-row md:justify-between md:gap-2">
                <time
                  dateTime={post.date}
                  className="flex-none py-0.5 text-xs leading-5 tracking-tight text-slate-500 md:order-2"
                >
                  {formatDate(post.date, "MMM dd")}
                </time>
                <p className="max-w-[85ch] flex-auto space-x-2 py-0.5 leading-5">
                  <span className="font-medium text-slate-900">
                    {title(post.title)}
                  </span>
                  <span>{post.description}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </CardSection>
  );
}
