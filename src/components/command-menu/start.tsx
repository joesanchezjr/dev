"use client"

import React from "react"
import { MoreVertical } from "lucide-react"

import { useCommandMenu } from "@/components/command-menu/use-command-menu"
import { cn } from "@/lib/utils"

import { ACTION_KEY } from "./command-menu"

export default function Start({
  global = true,
  className,
  ...rest
}: { global?: boolean } & React.HTMLAttributes<HTMLButtonElement>) {
  const [isClient, setIsClient] = React.useState(false)
  const { open, setOpen } = useCommandMenu()

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

  const styles = cn(
    "text-muted-foreground text-sm duration-500 animate-in fade-in",
    global && "fixed right-4 top-4",
    isMobile ? "slide-in-from-right" : "zoom-in",
    className,
  )

  if (isMobile) {
    return (
      <button className={styles} onClick={() => setOpen(!open)} {...rest}>
        <span className="flex items-center gap-2">
          <span>Menu</span> <MoreVertical className="h-4 w-4" />
        </span>
      </button>
    )
  }
  return (
    <button className={styles} onClick={() => setOpen(!open)} {...rest}>
      Press{" "}
      <kbd className="bg-muted font-mono text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 text-[10px] font-medium opacity-100">
        <span className="text-xs">{ACTION_KEY.toUpperCase()} + K</span>
      </kbd>
    </button>
  )
}
