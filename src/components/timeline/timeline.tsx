import clsx from "clsx";
import { formatDate } from "@/utils/date";

function TimelineItem({
  item,
  isLast,
}: {
  item: {
    title: string;
    description: string;
    date?: string;
    preformattedDate?: string;
  };
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

      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
        <time
          dateTime={item.date}
          className="flex-none py-0.5 text-sm leading-5 tracking-tight text-slate-500 md:order-2 ml-6 md:ml-0"
        >
          {item?.preformattedDate ??
            (item.date && formatDate(item.date, "MMM dd"))}
        </time>
        <span className="space-x-2 py-0.5 leading-5 ml-6">
          <span className="font-medium text-black dark:text-white">
            {item.title}
          </span>
          <span className="text-sm">{item.description}</span>
        </span>
      </div>
    </li>
  );
}

export default function Timeline({
  items,
}: {
  items: {
    title: string;
    description: string;
    date?: string;
    preformattedDate?: string;
  }[];
}) {
  return (
    <ul role="list" className="-ml-1 space-y-4">
      {items.map((item, index) => (
        <TimelineItem
          key={item.title}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
}
