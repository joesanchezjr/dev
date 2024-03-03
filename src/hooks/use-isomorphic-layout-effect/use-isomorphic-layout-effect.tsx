import React from "react";

export function useIsomorphicLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) {
  const useLayoutEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
  return useLayoutEffect(effect, deps);
}
