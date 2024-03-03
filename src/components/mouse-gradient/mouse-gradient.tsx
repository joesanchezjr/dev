"use client"

import { useMousePosition } from "@/hooks/use-mouse-position/use-mouse-position"
import React from "react"

export function MouseGradient() {
  const mouse = useMousePosition()

  return (
    <>
      <div
        className="absolute inset-0 -z-50"
        style={{
          background: `radial-gradient(400px at ${mouse.x}px ${mouse.y}px, var(--mouse-gradient-color), transparent)`,
        }}
      />
    </>
  )
}
