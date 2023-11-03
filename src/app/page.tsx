import { Experience } from "@/app/_components/experience/experience";
import { Intro } from "@/app/_components/intro/intro";
import { EngineeringNotes } from "@/app/_components/engineering-notes/engineering-notes";
import { CardSection } from "@/components/card/card";

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <EngineeringNotes />
      <section className="max-width flex flex-col gap-4 px-4 md:flex-row">
        <CardSection
          className="mb-8 w-full md:w-auto md:basis-1/2"
          noPadding
          as="div"
        >
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
            <span className="h-2 w-2 rounded-full bg-blue-600/60 dark:bg-blue-600" />{" "}
            Listening To
          </h2>
          <iframe
            id="embedPlayer"
            src="https://embed.music.apple.com/us/playlist/fall-2023/pl.u-MqM6s4G14EX?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
            height="450px"
            frameBorder="0"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            allow="autoplay *; encrypted-media *; clipboard-write"
            style={{
              width: "100%",
              // maxWidth: 660,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: "transparent",
              transform: "translateZ(0px)",
              animation: "2s ease 0s 6 normal none running loading-indicator",
            }}
          />
        </CardSection>
        <CardSection
          className="relative mb-12 w-full md:w-auto md:basis-1/2"
          noPadding
          as="div"
        >
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
            <span className="h-2 w-2 rounded-full bg-blue-600/60 dark:bg-blue-600" />{" "}
            Currently Watching
          </h2>
          <div className="flex items-center justify-center py-8 md:h-[450px]">
            <p className="text-center">
              This section is left intentionally blank{" "}
              <span className="inline-block">
                in solidarity with the ongoing SAG-AFTRA strike.
              </span>
            </p>
          </div>
        </CardSection>
      </section>
    </>
  );
}
