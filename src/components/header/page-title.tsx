"use client"

import { usePathname } from "next/navigation"

export function PageTitle() {
  const pathname = usePathname()
  let title: string
  switch (pathname) {
    case "/contact":
      title = "Contact"
      break
    default:
      title = "Joe Sanchez Jr."
  }
  return <h1 className="text-lg font-medium">{title}</h1>
}
