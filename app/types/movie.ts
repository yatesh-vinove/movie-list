/**
 * Interface representing a single movie item
 */
export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
    popularity: number;
    original_language: string;
    original_title: string;
    video?: boolean;
    adult?: boolean;
    vote_count?: number;
}

/**
 * Type representing the structure of TMDB API response
 */
export type MovieResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};
