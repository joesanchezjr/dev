"use client";

import Link from "next/link";

import Status from "@/components/header/status";
import Clock from "@/components/header/clock";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import clsx from "clsx";
import { EdgeConfigValue } from "@vercel/edge-config";

const HeaderItem = ({
  title,
  content,
  className,
}: {
  title: string;
  content: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("header-item animate-scaleup", className)}>
      <span className="text-xs text-slate-400 dark:text-slate-600">
        {title}
      </span>
      <div className="font-medium">{content}</div>
    </div>
  );
};

export function AnimatedHeader({ available }: { available?: EdgeConfigValue }) {
  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.from(".header-item", {
  //       duration: 0.5,
  //       opacity: 0,
  //       y: 10,
  //       stagger: 0.1,
  //       ease: "sine.in",
  //     });
  //   },
  //   { scope: container },
  // );

  return (
    <header
      className="max-width py-4 text-sm flex justify-between gap-8"
      ref={container}
    >
      <div className="flex items-center gap-4 lg:gap-8">
        <HeaderItem
          title="Name"
          content={<Link href="/">Joe Sanchez Jr.</Link>}
        />
        {available && (
          <HeaderItem
            title="Status"
            content={<Status />}
            className="hidden xs:block"
          />
        )}
        <HeaderItem
          className="hidden md:block"
          title="Timezone"
          content={<Clock />}
        />
      </div>
      <div className="flex items-end gap-8">
        <HeaderItem
          className="ml-auto hidden sm:block"
          title="Resume"
          content={
            <a
              href="/documents/resume.pdf?v=01.15"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download <span className="hidden md:inline">Resume</span>
            </a>
          }
        />
        <HeaderItem
          className="ml-auto"
          title="Find me on"
          content={
            <nav>
              <ul className="flex gap-4 font-medium">
                <li>
                  <a
                    href="https://www.linkedin.com/in/joesanchezjr"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/joesanchezjr"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          }
        />
      </div>
    </header>
  );
}
