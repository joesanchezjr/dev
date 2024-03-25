"use client"

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
        <h1 className="text-lg font-medium">Joe Sanchez Jr</h1>
      </Link>
      {title === null ? null : (
        <>
          <span className="text-zinc-500">/</span>
          <h2 className="text-lg font-medium ml-2">{title}</h2>
        </>
      )}
    </div>
  )
}
