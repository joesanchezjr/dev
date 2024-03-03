import React from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";

export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = React.useState(true);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    setPrefersReduced(!window.matchMedia(QUERY).matches);

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReduced(!event.matches);
    }

    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReduced;
}
