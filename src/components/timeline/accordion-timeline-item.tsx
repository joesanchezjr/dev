import { cn } from "@/lib/utils"
import { formatDate } from "@/utils/date"

export function AccordionTimelineItem({
  item,
  className,
  ...rest
}: {
  item: {
    title: string
    description: string
    date?: string
    preformattedDate?: string
  }
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("timeline-item flex w-full flex-col items-start pr-4 sm:flex-row sm:justify-between", className)}
      {...rest}
    >
      <time dateTime={item.date} className="flex-none py-0.5 text-sm leading-5 tracking-tight text-zinc-500 md:hidden">
        {item?.preformattedDate ?? (item.date && formatDate(item.date, "MMM dd"))}
      </time>
      <span className="space-x-2 py-0.5 leading-5">
        <span className="font-medium text-black dark:text-white">{item.title}</span>
        <span className="text-sm">{item.description}</span>
      </span>
      {/* duplicating because flex order reads it out of the style order for screen readers, so using css display instead */}
      <time
        dateTime={item.date}
        className="hidden flex-none py-0.5 text-sm leading-5 tracking-tight text-zinc-500 md:inline"
      >
        {item?.preformattedDate ?? (item.date && formatDate(item.date, "MMM dd"))}
      </time>
    </div>
  )
}
