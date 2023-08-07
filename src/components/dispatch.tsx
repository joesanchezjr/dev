"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { useApp } from "@/hooks/use-app";

export function Header() {
  const { dispatch } = useApp();

  return (
    <header
      id="header-mobile"
      className="sticky top-0 z-40 flex min-h-[3rem] items-center gap-x-6 border-b border-b-slate-200 bg-white px-2 shadow-sm sm:px-4 lg:hidden"
    >
      <button
        type="button"
        className="-m-2.5 p-2.5 lg:hidden"
        onClick={() => dispatch({ type: "open" })}
      >
        <span className="sr-only">Open sidebar menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </header>
  );
}
