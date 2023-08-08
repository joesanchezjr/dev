"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { navigations } from "@/utils/constants";

export function Navigation() {
  const navigation = navigations.main;
  const pathname = usePathname();
  return (
    <nav className="bg-slate-800">
    <div className="max-width flex items-center justify-between">
      <ul className="flex space-x-4 py-3">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              className={clsx(
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              key={item.name}
            >
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-200 px-2 py-1 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            <span>Under construction</span>
          </div>
        </div>
    </div>
    </nav>
  );
}
