"use client"

import * as React from "react"

type Context = { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> } | undefined
const CommandMenuContext = React.createContext<Context>(undefined)

type CommandMenuProviderProps = { children: React.ReactNode }
export function CommandMenuProvider({ children }: CommandMenuProviderProps) {
  const [open, setOpen] = React.useState(false)

  const value = { open, setOpen }

  return <CommandMenuContext.Provider value={value}>{children}</CommandMenuContext.Provider>
}

export function useCommandMenu() {
  const context = React.useContext(CommandMenuContext)
  if (context === undefined) {
    throw new Error("useCommandMenu must be used within an CommandMenuProvider")
  }
  return context
}
