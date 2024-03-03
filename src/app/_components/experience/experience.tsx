import { allExperiences } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { compareDesc } from "date-fns";
import { formatDate } from "@/utils/date";
import { Card } from "@/components/card/card";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

const skills = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Jest",
  "Git",
  "GitHub",
  "Figma",
  "React Native",
  "Redux",
  "Node.js",
  "React Context",
  "Agile",
  "Debugging",
  "Unit Testing",
  "JSX",
  "A11y",
  "WCAG",
  "ARIA",
  "npm",
  "Yarn",
  "Webpack",
  "CLI",
  "CSS-in-JS",
  "styled-components",
];

export function Experience() {
  return (
    <div>
      <h2 className="font-medium mb-2">Work Experience</h2>
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {allExperiences
          .sort((a, z) =>
            compareDesc(new Date(a.startDate), new Date(z.startDate)),
          )
          .map((experience) => {
            return (
              <li
                key={experience.company}
                className="aspect-square group relative rounded-md border border-slate-200 p-4 shadow-sm transition-all hover:shadow-md  dark:border-slate-800 dark:bg-slate-950 flex items-center justify-center"
              >
                <Link href={experience.slug}>
                  {/* span used for forcing the link to fill the div */}
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  <div className="flex flex-col items-center gap-1 text-center">
                    <div className="rounded-md border border-zinc-100 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900">
                      {experience.icon && (
                        <Image
                          src={experience.icon}
                          alt={experience.company}
                          width={48}
                          height={48}
                          className="h-12 w-12"
                        />
                      )}
                    </div>
                    <div className="font-medium">{experience.company}</div>
                    <div>{experience.title}</div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {formatDate(experience.startDate)} -{" "}
                      {experience.endDate
                        ? formatDate(experience.endDate)
                        : "Present"}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
