import Image from "next/image";
import { Star, Film } from "lucide-react";
import type { Movie } from "../types/movie";

export function MovieCard({ movie }: { movie: Movie }) {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-poster.png";

    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-gray-100 dark:bg-zinc-800">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={movie.title}
                    width={500}
                    height={750}
                    className="w-full h-auto object-cover"
                    priority={false}
                />
                {/* Optional overlay icon */}
                <div className="absolute top-2 left-2 bg-black/50 text-white rounded-full p-1.5">
                    <Film className="w-4 h-4" />
                </div>
            </div>

            <div className="p-4 flex flex-col space-y-1">
                <h2 className="font-semibold text-lg line-clamp-1">{movie.title}</h2>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(movie.release_date).getFullYear()}
                </p>

                <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 mt-1 space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{movie.vote_average.toFixed(1)}</span>
                    <span className="text-gray-400">•</span>
                    <span>{movie.original_language.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
}
