import { useLayoutEffect, useEffect } from "react"

export function useIsomorphicLayoutEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
  const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect
  return useIso(effect, deps)
}
