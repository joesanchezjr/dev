"use client"

import { CommandMenuProvider } from "@/components/command-menu/use-command-menu"

export function Providers({ children }: { children: React.ReactNode }) {
  return <CommandMenuProvider>{children}</CommandMenuProvider>
}
