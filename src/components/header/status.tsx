import { get } from "@vercel/edge-config"
import Link from "next/link"

export async function Status() {
  const available = await get("availableForHire")

  if (!available) {
    return null
  }

  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-2 rounded-full bg-green-200 px-2 py-1 text-xs ring-0 ring-green-600 transition-all hover:ring-1 dark:border dark:border-zinc-700 dark:bg-transparent dark:text-white"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
      </span>
      <span>Available for hire</span>
    </Link>
  )
}
