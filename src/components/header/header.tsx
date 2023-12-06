import Link from "next/link";
import "@/styles/globals.css";

import { get } from "@vercel/edge-config";

import Status from "@/components/header/status";
import Clock from "@/components/header/clock";

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
      <header className="max-width py-4 text-sm flex justify-between gap-8">
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
                href="/documents/resume.pdf"
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
    </>
  );
}
