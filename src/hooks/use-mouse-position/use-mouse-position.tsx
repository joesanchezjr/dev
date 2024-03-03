import React from "react";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect/use-isomorphic-layout-effect";
import { useReducedMotion } from "@/hooks/use-reduced-motion/use-reduced-motion";

export function useMousePosition() {
  const prefersReducedMotion = useReducedMotion();

  const [state, setState] = React.useState({ x: 0, y: 0 });

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      const newState = { x: event.pageX, y: event.pageY };
      setState((prev) => {
        return { ...prev, ...newState };
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prefersReducedMotion]);

  return state;
}
