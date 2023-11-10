import { Experience } from "@/app/_components/experience/experience";
import { Intro } from "@/app/_components/intro/intro";
import { EngineeringNotes } from "@/app/_components/engineering-notes/engineering-notes";
import { Card } from "@/components/card/card";
import Dots from "@/app/animation/dots";
// import Spotify from "@/app/spotify";
import Pokemon from "@/components/pokemon/pokemon";
import FavoriteMovies from "@/components/favorite-movies/favorite-movies";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <EngineeringNotes />
      <section className="max-width flex flex-col gap-4 px-4 md:flex-row">
        <Card
          className="mb-8 md:flex-shrink-0 md:basis-1/2"
          title="Listening To"
          dotColor="blue"
        >
          <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/playlist/3uiwFOJYSULQBk43ubSOOw?utm_source=generator&theme=0"
            width="100%"
            height={450}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Card>
        <Card
          className="relative mb-12 md:basis-1/2"
          title="Favorite Films"
          dotColor="slate"
          rightHeaderElement={() => (
            <div className="flex items-center gap-1">
              <span className="hidden text-xs sm:inline">Source /</span>
              <Image
                src="/the_movie_db-blue-short.svg"
                width={100}
                height={13}
                alt="The Movie DB"
              />
            </div>
          )}
        >
          <FavoriteMovies />
        </Card>
      </section>
      <section className="max-width mb-12 flex flex-col gap-4 px-4 md:flex-row">
        <Card
          className="md:basis-1/3"
          variant="outline"
          title="Dots"
          dotColor="green"
        >
          <Dots mini />
        </Card>
        <div className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-pink-600 via-purple-800 to-blue-700 px-4 py-16 text-slate-100 md:w-auto md:basis-2/3">
          <div className="text-3xl font-bold">Hello world 👋🏽</div>
        </div>
      </section>
      <section className="max-width mb-12 flex flex-col gap-4 px-4 md:flex-row md:justify-end">
        <Card
          className="md:mx-[initial] md:basis-1/6"
          title="Pokédex"
          dotColor="yellow"
          dotHue={400}
        >
          <Pokemon />
        </Card>
      </section>
    </>
  );
}
