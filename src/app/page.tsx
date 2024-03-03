import { allExperiences } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/utils/date";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

import Timeline from "@/components/timeline/timeline";
import { Header } from "@/components/header/header";

export default async function Home() {
  return (
    <main>
      <div className="py-16 md:py-32 container space-y-12">
        <Header />
        <div>
          <div className="flex items-center justify-between mb-4 gap-1">
            <h2 className="font-medium ">Experience</h2>
            <Link
              href="/resume"
              download
              className="text-sm group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowDownTrayIcon
                aria-hidden
                className="h-4 w-4 opacity-0 translate-y-1 inline group-hover:translate-y-0 group-hover:opacity-100 transition-all"
              />{" "}
              <span className="underline underline-offset-4 decoration-zinc-300 group-hover:decoration-zinc-700 dark:decoration-zinc-600 dark:group-hover:decoration-zinc-300 transition-colors">
                Download resume
              </span>
            </Link>
          </div>
          <div>
            <Timeline
              items={allExperiences
                .sort((a, z) =>
                  compareDesc(new Date(a.startDate), new Date(z.startDate)),
                )
                .map((experience) => {
                  return {
                    title: `${experience.title}`,
                    description: `at ${experience.company}`,
                    preformattedDate: `${formatDate(experience.startDate)} - ${
                      experience.endDate
                        ? formatDate(experience.endDate)
                        : "Present"
                    }`,
                  };
                })}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4 gap-1">
            <h2 className="font-medium ">Connect</h2>
          </div>
          <div>
            <p>
              Find me on{" "}
              <a
                href="https://www.linkedin.com/in/joesanchezjr"
                className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://github.com/joesanchezjr"
                className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              , or{" "}
              <a
                href="https://bsky.app/profile/joesanchezjr.dev"
                className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bluesky
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
