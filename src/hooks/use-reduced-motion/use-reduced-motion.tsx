import { useState, useRef, useEffect } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  const query =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

  const { current } = useRef(query);

  useEffect(() => {
    if (!query) return;
    if (!current) return;

    const handleChange = () => {
      setReduced(!!current.matches);
    };

    query.addEventListener("change", handleChange);

    return () => {
      query.removeEventListener("change", handleChange);
    };
  }, [query]);

  return reduced;
}
