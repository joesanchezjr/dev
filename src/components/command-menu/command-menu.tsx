"use client"

import * as React from "react"
import { FileText, Home, Rss } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Start from "@/components/command-menu/start"
import { Toaster } from "@/components/ui/sonner"
import { useCommandMenu } from "@/components/command-menu/use-command-menu"

export const ACTION_KEY = "z"

const createCommandLabel = (shortcut: string) => {
  return `${ACTION_KEY.toLocaleUpperCase()} + ${shortcut.toLocaleUpperCase()}`
}

export function CommandMenu() {
  const router = useRouter()
  const { open, setOpen } = useCommandMenu()

  // @todo: closing menu after navigation causes a flash (opacity drops before page is routed)
  // @todo: menu might close while still routing on slow connections making it look like it didn't work
  // @todo: too many useCallbacks - needs to be cleaned up - use a single handler for all actions

  const downloadResume = React.useCallback(() => {
    // @todo: make this a fetch?
    const link = document.querySelector("#download-resume-link") as HTMLAnchorElement
    if (link) {
      link.click() // link is target="_blank" so it will open in a new tab
      open && setOpen(false)
      toast.success("Downloading resume...")
    }
  }, [open, setOpen])

  const goHome = React.useCallback(() => {
    router.push("/")
    open && setOpen(false)
  }, [open, router, setOpen])

  const goToBlog = React.useCallback(() => {
    router.push("/blog")
    open && setOpen(false)
  }, [open, router, setOpen])

  React.useEffect(() => {
    const keys = new Set<string>([])

    const down = (e: KeyboardEvent) => {
      const usingActionKey = keys.has(ACTION_KEY)

      keys.add(e.key)
      // if action key is not pressed, don't do anything
      if (!usingActionKey) {
        return
      }

      // open command menu
      if (keys.has("k")) {
        e.preventDefault()
        setOpen((open) => !open)
      }

      // download resume
      if (keys.has("/")) {
        e.preventDefault()
        downloadResume()
      }

      // go to home page
      if (keys.has("h")) {
        e.preventDefault()
        goHome()
      }

      // go to blog page
      if (keys.has("b")) {
        e.preventDefault()
        goToBlog()
      }
    }

    // remove keys from set on keyup
    const up = (e: KeyboardEvent) => {
      keys.delete(e.key)
    }

    document.addEventListener("keydown", down)
    document.addEventListener("keyup", up)
    return () => {
      document.removeEventListener("keydown", down)
      document.removeEventListener("keyup", up)
    }
  }, [downloadResume, goHome, goToBlog, open, router, setOpen])

  if (typeof window === "undefined") {
    return
  }
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

  return (
    <>
      <Start />
      <Toaster />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={downloadResume}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
              {!isMobile && <CommandShortcut>{createCommandLabel("/")}</CommandShortcut>}
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={goHome}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
              {!isMobile && <CommandShortcut>{createCommandLabel("h")}</CommandShortcut>}
            </CommandItem>
            <CommandItem onSelect={goToBlog}>
              <Rss className="mr-2 h-4 w-4" />
              <span>Blog</span>
              {!isMobile && <CommandShortcut>{createCommandLabel("b")}</CommandShortcut>}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
