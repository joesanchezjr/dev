"use client";

import { TimelineItem } from "@/components/timeline/timeline-item";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks";

export default function Timeline({
  items,
}: {
  items: {
    title: string;
    description: string;
    date?: string;
    preformattedDate?: string;
  }[];
}) {
  const prefersReducedMotion = useReducedMotion();
  const container = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 25,
        stagger: 0.125,
        ease: "power2.out",
      });
    },
    { scope: container, dependencies: [prefersReducedMotion] },
  );

  return (
    <ul role="list" className="-ml-1 space-y-4" ref={container}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.title}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
}
