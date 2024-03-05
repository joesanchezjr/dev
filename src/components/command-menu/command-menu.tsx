"use client"

import * as React from "react"
import { FileText, Home, Mail } from "lucide-react"
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

export function CommandMenu() {
  const router = useRouter()
  const { open, setOpen } = useCommandMenu()

  const downloadResume = React.useCallback(() => {
    // @todo: make this a fetch?
    const link = document.querySelector("#download-resume-link") as HTMLAnchorElement
    if (link) {
      link.click()
      open && setOpen(false)
      toast.success("Downloading resume...")
    }
  }, [open, setOpen])

  const goHome = React.useCallback(() => {
    router.push("/")
    open && setOpen(false)
  }, [open, router, setOpen])

  const goToContact = React.useCallback(() => {
    router.push("/contact")
    open && setOpen(false)
  }, [open, router, setOpen])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        downloadResume()
      }
      if (e.key === "h" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        goHome()
      }
      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        goToContact()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [downloadResume, goHome, goToContact, open, router, setOpen])

  if (typeof window === "undefined") {
    return
  }
  const isMac = /(Mac)/i.test(navigator.userAgent)
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
              {!isMobile && <CommandShortcut>{isMac ? "⌘" : "ctrl"}/</CommandShortcut>}
            </CommandItem>
            {/* <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>  */}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={goHome}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
              {!isMobile && <CommandShortcut>{isMac ? "⌘" : "ctrl"}H</CommandShortcut>}
            </CommandItem>
            <CommandItem onSelect={goToContact}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact</span>
              {!isMobile && <CommandShortcut>{isMac ? "⌘" : "ctrl"}C</CommandShortcut>}
            </CommandItem>
            {/* <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem> */}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
