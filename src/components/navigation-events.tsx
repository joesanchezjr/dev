"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { IS_DEV, IS_PROD } from "@/utils/constants";

// https://nextjs.org/docs/app/api-reference/functions/use-router#router-events

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    IS_DEV && console.log(url);
  }, [pathname, searchParams]);

  return null;
}
