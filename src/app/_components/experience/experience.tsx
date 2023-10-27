import { allExperiences } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { compareDesc } from "date-fns";
import { formatDate } from "@/utils/format-date";
import { CardSection } from "@/components/card/card";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

const skills =[
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
  "styled-components"
]

export function Experience() {

  return (
    <section className="px-4 flex flex-col md:flex-row gap-4 max-width">
      <CardSection className="mb-8 w-full md:w-auto md:basis-2/3" noPadding as="div">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
          <span className="h-2 w-2 rounded-full bg-purple-600/60 dark:bg-purple-600" />{" "}
          Work Experience
        </h2>

        <ul role="list" className="flex flex-col gap-4">
          {allExperiences
            .sort((a, z) =>
              compareDesc(new Date(a.startDate), new Date(z.startDate))
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
                            className="my-0 inline-block h-4 w-4 sm:h-6 sm:w-6 object-contain"
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
      </CardSection>
      <CardSection className="mb-12 w-full md:w-auto md:basis-1/3 relative" noPadding as="div">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
          <span className="h-2 w-2 rounded-full bg-yellow-600/60 dark:bg-yellow-600" />{" "}
          Skills
        </h2>
        <ul role="list" className="flex flex-col md:gap-1 md:mb-[2px] md:max-h-[276px] overflow-y-scroll">
          {skills.map((skill) => {
            return (
              <li key={skill} className="w-1/2 md:w-auto">
                <span className="text-sm" aria-hidden role="presentation">↳</span> {skill}
              </li>
            );
          })}
        </ul>
        <div className="group absolute right-4 bottom-4 hidden md:block">
          <div className="transition-opacity opacity-0 group-hover:opacity-100  text-xs">Scroll in this box for more skills</div>
          <ArrowDownIcon className="h-5 w-5 animate-bounce ml-auto" />
        </div>
      </CardSection>
    </section>
  );
}
