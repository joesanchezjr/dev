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
      <ul className="max-width flex space-x-4 py-3">
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
    </nav>
  );
}
