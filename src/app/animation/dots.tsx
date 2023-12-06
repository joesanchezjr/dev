"use client";

import clsx from "clsx";
import { motion, MotionConfig } from "framer-motion";
import React from "react";

const OFFSET = 4;
const ANIMATION_DURATION = 0.7;
const PAUSE_DURATION = 0.3;

function getRandomColor() {
  const colors = ["#34d399", "#818cf8", "#22d3ee", "#f87171"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function Dot({ color, time }: { color: string; time: number }) {
  const initialPosition = { x: 0, y: 0 };
  return (
    <div className="relative flex" suppressHydrationWarning>
      <MotionConfig
        reducedMotion="user"
        transition={{
          duration: ANIMATION_DURATION,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: PAUSE_DURATION,
          delay: time / 1000,
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={initialPosition}
          whileHover={initialPosition}
          className="h-8 w-8 rounded-full border"
          animate={{ x: OFFSET, y: OFFSET }}
          style={{ backgroundColor: color, borderColor: color }}
        />
        <motion.div
          initial={initialPosition}
          whileHover={initialPosition}
          className="absolute h-8 w-8 rounded-full border bg-slate-50 dark:bg-slate-950"
          animate={{ x: -OFFSET, y: -OFFSET }}
          style={{
            borderColor: color,
          }}
        />
      </MotionConfig>
    </div>
  );
}

export default function Dots({ mini = true }: { mini?: boolean }) {
  const classes = clsx(
    "my-12 grid justify-items-center",
    mini
      ? "grid-cols-3 gap-[10vw] md:gap-[5vw] mx-auto p-4"
      : "max-width grid-cols-4 gap-12 md:grid-cols-8 md:gap-24 ",
  );
  return (
    <div className={classes}>
      {Array.from({ length: mini ? 9 : 64 }).map((_, i) => (
        <Dot
          key={i}
          color={getRandomColor()}
          time={Math.ceil(Math.random() * 2000)}
        />
      ))}
    </div>
  );
}
