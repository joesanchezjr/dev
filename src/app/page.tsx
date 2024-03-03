// import Image from "next/image";

// import { Experience } from "@/app/_components/experience/experience";
// import { Intro } from "@/app/_components/intro/intro";
// import { EngineeringNotes } from "@/app/_components/engineering-notes/engineering-notes";
// import { Card } from "@/components/card/card";
// import Dots from "@/app/animation/dots";
// import Pokemon from "@/components/pokemon/pokemon";
// import FavoriteMovies from "@/components/favorite-movies/favorite-movies";
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
      <div className="py-16 md:py-32 max-width space-y-12">
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
            {/* <ul className="space-y-2">
              {allExperiences
                .sort((a, z) =>
                  compareDesc(new Date(a.startDate), new Date(z.startDate)),
                )
                .map((experience) => {
                  return (
                    <li key={experience.company}>
                      <h3>
                        {experience.title} @ <span>{experience.company}</span>
                      </h3>
                      <div className="text-sm ml-2 text-zinc-500">
                        {formatDate(experience.startDate)} -{" "}
                        {experience.endDate
                          ? formatDate(experience.endDate)
                          : "Present"}
                      </div>
                    </li>
                  );
                })}
            </ul> */}
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

        {/* <EngineeringNotes /> */}
      </div>
    </main>
    // <>
    //   <Intro />
    //   <Experience />
    //   <EngineeringNotes />
    //   <section className="max-width flex flex-col gap-4 px-4 md:flex-row">
    //     <Card
    //       className="mb-8 md:flex-shrink-0 md:basis-1/2"
    //       title="Listening To"
    //       dotColor="blue"
    //     >
    //       <iframe
    //         style={{ borderRadius: 12 }}
    //         src="https://open.spotify.com/embed/playlist/3uiwFOJYSULQBk43ubSOOw?utm_source=generator&theme=0"
    //         width="100%"
    //         height={450}
    //         allowFullScreen
    //         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    //         loading="lazy"
    //       ></iframe>
    //     </Card>
    //     <Card
    //       className="relative mb-12 md:basis-1/2"
    //       title="Favorite Films"
    //       dotColor="slate"
    //       rightHeaderElement={() => (
    //         <div className="flex items-center gap-1">
    //           <span className="hidden text-xs sm:inline">Source /</span>
    //           <Image
    //             src="/the_movie_db-blue-short.svg"
    //             width={100}
    //             height={13}
    //             alt="The Movie DB"
    //           />
    //         </div>
    //       )}
    //     >
    //       <FavoriteMovies />
    //     </Card>
    //   </section>
    //   <section className="max-width mb-12 flex flex-col gap-4 px-4 md:flex-row">
    //     <Card
    //       className="md:basis-1/3"
    //       variant="outline"
    //       title="Dots"
    //       dotColor="green"
    //     >
    //       <Dots mini />
    //     </Card>
    //     <div className="flex w-full flex-wrap items-stretch justify-between rounded-md bg-gradient-to-r from-pink-600 via-purple-800 to-blue-700 p-4 text-slate-100 md:w-auto md:basis-2/3">
    //       {[
    //         {
    //           title: "6+",
    //           subtitle: "years of experience",
    //         },
    //         { title: "30+", subtitle: "cafes coded in" },
    //         { title: "120+", subtitle: "daily mg of caffeine" },

    //         { title: "∞", subtitle: "Possibilities" },
    //       ].map((block) => {
    //         return (
    //           <div
    //             className="basis-full xs:basis-1/2 p-1 text-center"
    //             key={block.title}
    //           >
    //             <div className="rounded border border-slate-300 px-4 py-8 hover:bg-slate-50 hover:text-slate-700 h-full flex flex-col items-center justify-center">
    //               <div className="text-4xl font-bold">{block.title}</div>
    //               <div>{block.subtitle}</div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </section>
    //   <section className="max-width mb-12 flex flex-col gap-4 px-4 md:flex-row md:items-stretch">
    //     <Card
    //       className="md:mx-[initial] md:basis-1/6 md:flex"
    //       title="Pokédex"
    //       dotColor="yellow"
    //       dotHue={400}
    //       innerClasses="w-full flex flex-col justify-between"
    //     >
    //       <Pokemon />
    //     </Card>
    //   </section>
    // </>
  );
}
