"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { useReducedMotion } from "@/hooks"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/timeline/accordion-timeline"
import { AccordionTimelineItem } from "@/components/timeline/accordion-timeline-item"

export default function Timeline({
  items,
}: {
  items: {
    title: string
    content: React.ReactNode
    description: string
    date?: string
    preformattedDate?: string
  }[]
}) {
  const prefersReducedMotion = useReducedMotion()
  const container = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return
      }
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 15,
        stagger: 0.125,
        ease: "power2.out",
      })
    },
    { scope: container, dependencies: [prefersReducedMotion] },
  )

  return (
    <>
      <Accordion type="single" collapsible ref={container}>
        {items.map((item, index) => (
          <AccordionItem value={index.toString()} key={index} isLast={index === items.length - 1}>
            <AccordionTrigger>
              <AccordionTimelineItem key={item.title} item={item} />
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
