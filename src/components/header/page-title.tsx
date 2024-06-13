"use client"

import { cn } from "@/lib/utils"
import { CornerRightDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function PageTitle() {
  const pathname = usePathname()
  let title: string | null
  switch (true) {
    case pathname.includes("/blog"):
      title = "Blog"
      break
    default:
      title = null
  }

  const blogSlug = pathname.includes("/blog/") && pathname.split("/").length === 3

  return (
    <div className="flex items-center">
      <Link href="/" className="mr-2">
        <h1
          className={cn(
            "text-lg font-medium transition-all",
            pathname !== "/" &&
              "underline decoration-zinc-300 underline-offset-4  hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300",
          )}
        >
          Joe Sanchez Jr
        </h1>
      </Link>
      {title === null ? null : (
        <>
          <span className="text-zinc-300">/</span>
          {blogSlug ? (
            <Link href="/blog">
              <h2 className="mx-2 font-medium underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300">
                {title}
              </h2>
            </Link>
          ) : (
            <h2 className="mx-2 font-medium">{title}</h2>
          )}
        </>
      )}
      {!blogSlug ? null : (
        <>
          <span className="text-zinc-300">/</span>
          <div className="ml-2 flex items-center text-sm font-medium ">
            <CornerRightDown className="h-4 w-4" />
          </div>
        </>
      )}
    </div>
  )
}
