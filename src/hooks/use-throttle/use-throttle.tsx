import React from "react"

export function useThrottle<T>(value: T, interval = 300) {
  const now = Date.now()
  const [throttledValue, setThrottledValue] = React.useState(value)
  const lastUpdated = React.useRef(now)

  React.useEffect(() => {
    if (now >= lastUpdated.current + interval) {
      lastUpdated.current = now
      setThrottledValue(value)
    } else {
      const timeout = setTimeout(() => {
        lastUpdated.current = now
        setThrottledValue(value)
      }, interval)

      return () => clearTimeout(timeout)
    }
  }, [now, value, interval])

  return throttledValue
}
