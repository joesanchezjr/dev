"use client";

import { motion, MotionConfig } from "framer-motion";
import React from "react";

const OFFSET = 4;
const ANIMATION_DURATION = 0.7;
const PAUSE_DURATION = 0.3;

function useDarkMode() {
  const isSystemDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(isSystemDarkMode);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return isDarkMode;
}

function getRandomColor(isDarkMode?: boolean) {
  const colors = ["#34d399", "#818cf8", "#22d3ee", "#f87171"];
  const darkModeColors = ["#059669", "#4f46e5", "#0891b2", "#dc2626"];

  const colorsToUse = isDarkMode ? darkModeColors : colors;

  return colorsToUse[Math.floor(Math.random() * colors.length)];
}

function Dot({ color, time }: { color: string; time: number }) {
  const initialPosition = { x: 0, y: 0 };
  return (
    <div className="relative flex">
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

export default function AnimationPage() {
  const isDarkMode = useDarkMode();
  return (
    <div className="max-width my-12 grid grid-cols-4 justify-items-center gap-12 md:grid-cols-8 md:gap-24">
      {Array.from({ length: 64 }).map((_, i) => (
        <Dot
          key={i}
          color={getRandomColor(isDarkMode)}
          time={Math.ceil(Math.random() * 2000)}
        />
      ))}
    </div>
  );
}
