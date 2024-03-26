"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function PageTitle() {
  const pathname = usePathname()
  let title: string | null
  switch (true) {
    case pathname.includes("/blog"):
      title = "Blog"
      break
    case pathname === "/contact":
      title = "Contact"
      break
    default:
      title = null
  }
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
          <h2 className="ml-2 text-lg font-medium ">{title}</h2>
        </>
      )}
    </div>
  )
}
