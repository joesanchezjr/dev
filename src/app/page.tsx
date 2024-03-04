import { compareDesc } from "date-fns"
import Link from "next/link"
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"

import { formatDate } from "@/utils/date"

import { experience } from "@/content/experience"

import Timeline from "@/components/timeline/timeline"
import { Header } from "@/components/header/header"

export default function Home() {
  return (
    <main>
      <div className="container space-y-12 py-16 md:py-32">
        <Header />
        <div>
          <div className="mb-4 flex items-center justify-between gap-1">
            <h2 className="font-medium ">Experience</h2>
            <Link href="/resume" download className="group text-sm" target="_blank" rel="noopener noreferrer" id="download-resume-link">
              <ArrowDownTrayIcon
                aria-hidden
                className="inline h-4 w-4 translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              />{" "}
              <span className="underline decoration-zinc-300 underline-offset-4 transition-colors group-hover:decoration-zinc-700 dark:decoration-zinc-600 dark:group-hover:decoration-zinc-300">
                Download resume
              </span>
            </Link>
          </div>
          <div>
            <Timeline
              items={experience
                .sort((a, z) => compareDesc(new Date(a.startDate), new Date(z.startDate)))
                .map((experience) => {
                  return {
                    title: `${experience.title}`,
                    description: `at ${experience.company}`,
                    preformattedDate: `${formatDate(experience.startDate)} - ${
                      experience.endDate ? formatDate(experience.endDate) : "Present"
                    }`,
                  }
                })}
            />
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center justify-between gap-1">
            <h2 className="font-medium ">Connect</h2>
          </div>
          <div>
            <p>
              Find me on{" "}
              <a
                href="https://www.linkedin.com/in/joesanchezjr"
                className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://github.com/joesanchezjr"
                className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              , or{" "}
              <a
                href="https://bsky.app/profile/joesanchezjr.dev"
                className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
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
  )
}
