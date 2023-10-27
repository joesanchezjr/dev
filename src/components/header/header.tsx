import Link from "next/link";
import "@/styles/globals.css";

import { get } from "@vercel/edge-config";

import { utcToZonedTime, format } from "date-fns-tz";
import Status from "@/components/header/status";
import clsx from "clsx";

const date = new Date();
const timeZone = "America/Chicago";
const zonedDate = utcToZonedTime(date, timeZone);
const pattern = "h:mmaaa z (O)";
const output = format(zonedDate, pattern, { timeZone: "America/Chicago" });

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
    <div className={className}>
      <span className="text-xs text-slate-400 dark:text-slate-600">
        {title}
      </span>
      <div className="font-medium">{content}</div>
    </div>
  );
};

export async function Header() {
  const available = await get("availableForHire");

  return (
    <>
      <header className="max-width flex py-4 text-sm gap-4 items-center">
        <Link href="/" className="h-8 w-8 hover:fill-red-500 fill-slate-700 dark:fill-slate-300">
          <span className="sr-only">Home</span>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M197.9 253.9c32.2-113.5 86.9-164.1 137-186.9c43.8-20 90.1-21.4 126.8-16.6c4.8 36.6 3.4 82.9-16.6 126.8c-22.8 50-73.4 104.8-186.9 137c-6.4-12.9-14.8-24.7-25.2-35s-22.2-18.8-35-25.2zM44.4 287.7c1.2 .2 2.4 .3 3.6 .3h90.7c22.6 0 44.3 9 60.3 25s25 37.7 25 60.3l0 82.7c0 .1 0 .1 0 .2V512l160-80 0-119.9C527.5 223 520.4 80.2 502.7 9.3C431.8-8.4 289-15.5 199.9 128l-64.4 0c-.1 0-.2 0-.3 0L80 128 0 287.6l44.4 .1zM.5 511.5s116.5 8 166-41.5c34.4-34.4 34.4-90.1 0-124.5s-90.1-34.4-124.5 0C-7.5 395 .5 511.5 .5 511.5zm64.1-64.1s-2.7-38.7 13.8-55.2c11.4-11.4 30-11.4 41.4 0s11.4 30 0 41.4c-16.5 16.5-55.2 13.8-55.2 13.8zM408 144a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z"/></svg>
        </Link>
        <HeaderItem title="Name" content={<div className="mb-1">Joe Sanchez Jr.</div>} />
        {available && <HeaderItem title="Status" content={<Status />} className="hidden xs:block" />}
        <HeaderItem className="hidden sm:block" title="Timezone" content={`${output}`} />
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
      </header>
    </>
  );
}
