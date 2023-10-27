"use client";

import React from "react";

export default function LoadingDots() {
  return (
    <div className="max-width my-12 grid grid-cols-4 justify-items-center gap-12 md:grid-cols-8 md:gap-24">
      {Array.from({ length: 64 }).map((_, i) => (
        <div className="relative flex" key={i}>
          <div className="h-8 w-8 rounded-full border border-slate-300" />
        </div>
      ))}
    </div>
  );
}
