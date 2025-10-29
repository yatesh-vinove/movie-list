"use client";

import { useEffect, useState } from "react";
import type { Movie, MovieResponse } from "./types/movie";
import { MovieCard } from "./components/MovieCard";
import { Film, Loader2 } from "lucide-react";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("/api/movies");
        if (!res.ok) throw new Error("Failed to fetch movies");

        const data: MovieResponse = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-start py-20 px-6 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-2 mb-8">
          <Film className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Popular Movies
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {loading ? (
            <div className="col-span-full flex justify-center items-center mt-10">
              <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
              <p className="ml-2 text-gray-500">Loading movies...</p>
            </div>
          ) : movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p className="text-gray-500 mt-10">No movies found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
