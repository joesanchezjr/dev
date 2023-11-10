"use client";

import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import Balancer from "react-wrap-balancer";

import { Movie } from "./favorite-movies";

export default function FavoriteMoviesSelector({
  movies,
}: {
  movies: Movie[];
}) {
  const [selectedMovie, setSelectedMovie] = useState<Movie["id"]>(movies[0].id);
  const movie = movies.find((movie) => movie.id === selectedMovie) as Movie;
  return (
    <>
      <div className="flex gap-2">
        {movies.map((movie) => {
          const posterURL = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
          const isSelected = selectedMovie === movie.id;
          return (
            <button
              className="relative z-0 w-auto basis-1/5"
              key={movie.id}
              onClick={() => setSelectedMovie(movie.id)}
            >
              <Image
                src={posterURL}
                alt={movie.title}
                width={171}
                height={285}
              />
              {isSelected && (
                <div className="absolute -inset-1 -z-10 animate-scaleup rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
              )}
            </button>
          );
        })}
      </div>
      <div className="space-y-2 py-4">
        <div className="text-xl font-bold">
          <Balancer>{movie.title}</Balancer>
        </div>
        <div className="text-sm">
          Release Date: {format(new Date(movie.release_date), "MMMM dd, YYY")}
        </div>
        <p>{movie.overview}</p>
      </div>
    </>
  );
}
