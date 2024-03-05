"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item> & { isLast?: boolean },
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { isLast?: boolean }
>(({ className, children, isLast, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("accordion-item relative -ml-1", className)} {...props}>
    {/* dot */}
    <div className="absolute top-2 flex h-6 w-4 flex-none items-center justify-center">
      <div className="h-1.5 w-1.5 rounded-full bg-zinc-200 ring-1 ring-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700" />
    </div>
    {/* line */}
    <div className={cn("absolute left-0 top-7 flex w-4 justify-center", isLast ? "h-0" : "-bottom-3")}>
      <div className="w-px bg-zinc-200 dark:bg-zinc-800" />
    </div>

    <div className="ml-4">{children}</div>
  </AccordionPrimitive.Item>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "-mr-2 flex flex-1 items-center justify-between rounded-md px-2 py-2 font-medium decoration-zinc-700 underline-offset-4 transition-all hover:bg-zinc-900/10 hover:underline active:bg-zinc-900/20 dark:hover:bg-zinc-100/10 dark:hover:decoration-zinc-300 dark:active:bg-zinc-100/20 [&[data-state=open]>svg]:rotate-180 text-left",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pl-2 pt-0 transition-opacity animate-in fade-in duration-500", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
