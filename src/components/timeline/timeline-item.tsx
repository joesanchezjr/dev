import clsx from "clsx"
import { formatDate } from "@/utils/date"

export function TimelineItem({
  item,
  isLast,
  ...rest
}: {
  item: {
    title: string
    description: string
    date?: string
    preformattedDate?: string
  }
  isLast?: boolean
} & React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className="timeline-item relative flex will-change-transform" {...rest}>
      <div className={clsx("absolute left-0 top-5 flex w-4 justify-center", isLast ? "h-0" : "-bottom-5")}>
        <div className="w-px bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="absolute flex h-6 w-4 flex-none items-center justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-zinc-200 ring-1 ring-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700" />
      </div>

      <div className="flex w-full flex-col sm:flex-row sm:justify-between">
        <time
          dateTime={item.date}
          className="ml-6 flex-none py-0.5 text-sm leading-5 tracking-tight text-zinc-500 md:order-2 md:ml-0"
        >
          {item?.preformattedDate ?? (item.date && formatDate(item.date, "MMM dd"))}
        </time>
        <span className="ml-6 space-x-2 py-0.5 leading-5">
          <span className="font-medium text-black dark:text-white">{item.title}</span>
          <span className="text-sm">{item.description}</span>
        </span>
      </div>
    </li>
  )
}
