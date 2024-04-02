export default function LoadingBlogPage() {
  return (
    <div>
      {Array.from({ length: 3 }).map((post, index) => (
        <div key={index} className="group flex flex-col first-of-type:pt-0 last-of-type:pb-0 ">
          <div className="flex w-full flex-col py-4 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <div className="border-l border-l-zinc-300 pl-4 group-hover:border-l-indigo-500 dark:border-l-zinc-700 ">
              <h2 className="mb-2 h-6 w-[30ch] animate-pulse bg-zinc-300 text-lg font-medium tracking-tight text-neutral-900 dark:bg-zinc-700 dark:text-neutral-100"></h2>
              <div id={`placeholder-blog-${index}-excerpt-and-date`}>
                <div className="mb-3 h-4 w-full animate-pulse bg-zinc-300 dark:bg-zinc-700" />
                <div className="h-4 w-[12ch] animate-pulse bg-zinc-300 dark:bg-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
