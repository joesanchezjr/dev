"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { IS_DEV } from "@/utils/constants";

// https://nextjs.org/docs/app/api-reference/functions/use-router#router-events

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!IS_DEV) return;
    console.log(
      `DEV ONLY {pathname}/{searchParams}: ${pathname}?${searchParams}`,
    );
  }, [pathname, searchParams]);

  return null;
}
