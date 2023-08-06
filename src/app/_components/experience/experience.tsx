import { allExperiences } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { compareDesc } from "date-fns";
import { formatDate } from "@/util/format-date";

export function Experience() {
  return (
    <section className="max-width mb-12 rounded-md bg-slate-100 py-4">
      <div>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
          <span className="h-2 w-2 rounded-full bg-purple-600/60" /> Work
          Experience
        </h2>
      </div>
      <ul role="list" className="flex flex-col gap-4">
        {allExperiences
          .sort((a, z) =>
            compareDesc(new Date(a.startDate), new Date(z.startDate))
          )
          .map((experience) => {
            return (
              <li
                key={experience.company}
                className="group relative rounded-md border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <Link href={experience.slug}>
                  <div className="flex items-center gap-x-2">
                    <div className="rounded-md border border-slate-100 bg-slate-50 p-1">
                      {experience.icon && (
                        <Image
                          src={experience.icon}
                          alt={experience.company}
                          width={100}
                          height={100}
                          className="my-0 inline-block h-6 w-6 dark:invert dark:filter"
                        />
                      )}
                    </div>
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                      <p className="font-semibold leading-6">
                        {/* <Link href={person.href}> */}
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {experience.company}
                        {/* </Link> */}
                      </p>
                      <div className="flex items-center gap-x-4">
                        <div className="sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-slate-700">
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
                          className="ml-auto h-5 w-5 flex-none text-slate-400"
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
    </section>
  );
}
