"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// https://nextjs.org/docs/app/api-reference/functions/use-router#router-events

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
}
