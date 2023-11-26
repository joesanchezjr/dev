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
    <section className="max-width flex flex-col gap-4 px-4 md:flex-row">
      <Card
        className="mb-8 md:basis-2/3"
        title="Work Experience"
        dotColor="purple"
      >
        <ul role="list" className="flex flex-col gap-4">
          {allExperiences
            .sort((a, z) =>
              compareDesc(new Date(a.startDate), new Date(z.startDate)),
            )
            .map((experience) => {
              return (
                <li
                  key={experience.company}
                  className="group relative rounded-md border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md  dark:border-slate-800 dark:bg-slate-950"
                >
                  <Link href={experience.slug}>
                    <div className="flex items-center gap-x-2">
                      <div className="flex items-center justify-center rounded-md border border-slate-100 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900">
                        {experience.icon && (
                          <Image
                            src={experience.icon}
                            alt={experience.company}
                            width={24}
                            height={24}
                            className="my-0 inline-block h-4 w-4 object-contain sm:h-6 sm:w-6"
                          />
                        )}
                      </div>
                      <div className="w-full xs:flex xs:items-center xs:justify-between">
                        <p className="font-semibold leading-6">
                          <span className="absolute inset-x-0 -top-px bottom-0" />
                          {experience.company}
                        </p>
                        <div className="flex items-center gap-x-4">
                          <div className="xs:flex xs:flex-col xs:items-end">
                            <p className="text-sm leading-6">
                              {experience.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {formatDate(experience.startDate)} -{" "}
                              {experience.endDate
                                ? formatDate(experience.endDate)
                                : "Present"}
                            </p>
                          </div>
                          <ChevronRightIcon
                            className="-mt-6 ml-auto h-5 w-5 flex-none text-slate-400 dark:text-slate-600 xs:mt-0"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </Card>
      <Card
        className="relative mb-12 md:basis-1/3"
        title="Skills"
        dotColor="yellow"
      >
        <ul
          role="list"
          className="flex flex-col overflow-y-scroll md:mb-[2px] md:max-h-[276px] md:gap-1"
        >
          {skills.map((skill) => {
            return (
              <li key={skill} className="w-1/2 md:w-auto">
                <span className="text-sm" aria-hidden role="presentation">
                  ↳
                </span>{" "}
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="group absolute bottom-4 right-4 hidden md:block">
          <div className="text-xs opacity-0 transition-opacity  group-hover:opacity-100">
            Scroll in this box for more skills
          </div>
          <ArrowDownIcon className="ml-auto h-5 w-5 animate-bounce" />
        </div>
      </Card>
    </section>
  );
}
