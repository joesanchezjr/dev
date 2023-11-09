import FavoriteMoviesSelector from "@/app/favorite-movies-selector";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type FavoriteMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

const url = `https://api.themoviedb.org/3/account/${process.env.TMDB_ACCOUNT_ID}/favorite/movies?language=en-US&page=1`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

const getFavoriteMovies = async () => {
  try {
    const response = await fetch(url, options);
    const data: FavoriteMoviesResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch favorite movies");
  }
};

export default async function FavoriteMovies() {
  const favoriteMovies = await getFavoriteMovies();

  return (
    <div className="md:min-h-[450px]">
      <FavoriteMoviesSelector movies={favoriteMovies} />
    </div>
  );
}
