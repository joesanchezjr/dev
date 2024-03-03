import { Card } from "@/components/card/card";
import { formatDate } from "@/utils/date";
import clsx from "clsx";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import title from "title";

function PostLinkListItem({
  post,
  isLast,
}: {
  post: (typeof allPosts)[0];
  isLast?: boolean;
}) {
  return (
    <li className="relative flex">
      <div
        className={clsx(
          "absolute left-0 top-0 flex w-4 justify-center",
          isLast ? "h-6" : "-bottom-6",
        )}
      >
        <div className="w-px bg-slate-200 dark:bg-slate-800" />
      </div>
      <div className="absolute flex h-6 w-4 flex-none items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="h-1.5 w-1.5 rounded-full bg-slate-200 ring-1 ring-slate-300 dark:bg-slate-800 dark:ring-slate-700" />
      </div>
      <Link
        href={post.slug}
        className="flex w-full flex-col md:flex-row md:justify-between md:gap-2 ml-6"
      >
        <time
          dateTime={post.date}
          className="flex-none py-0.5 text-xs leading-5 tracking-tight text-slate-500 md:order-2"
        >
          {formatDate(post.date, "MMM dd")}
        </time>
        <span className="max-w-[85ch] flex-auto space-x-2 py-0.5 leading-5">
          <span className="font-medium text-black dark:text-white">
            {post.overrideTitleCasing ? post.title : title(post.title)}
          </span>
          <span>{post.description}</span>
        </span>
      </Link>
    </li>
  );
}

export function EngineeringNotes({ showAll }: { showAll?: boolean }) {
  const sortedPosts = allPosts.sort((a, z) =>
    compareDesc(new Date(a.date), new Date(z.date)),
  );
  const postsToShow = showAll ? sortedPosts : sortedPosts.slice(0, 5);

  return (
    <div>
      <h2 className="font-medium mb-2">Engineering Notes</h2>
      <div>
        <ul role="list" className="-ml-1 space-y-6">
          {postsToShow.map((post, index) => (
            <PostLinkListItem
              key={post.title}
              post={post}
              isLast={index === postsToShow.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
