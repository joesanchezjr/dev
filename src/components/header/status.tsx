import { get } from "@vercel/edge-config"

export async function Status() {
  let available: boolean | undefined
  try {
    available = await get("availableForHire")
  } catch {
    return null
  }

  if (!available) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-green-200 px-2 py-1 text-xs ring-0 ring-green-600 transition-all hover:ring-1 dark:border dark:border-zinc-700 dark:bg-transparent dark:text-white">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
      </span>
      <span>Available for hire</span>
    </div>
  )
}
