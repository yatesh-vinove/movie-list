export async function GET() {
    const tmdbBaseUrl = process.env.NEXT_PUBLIC_TMDB_API_URL;
    const tmdbApiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    const popularMoviesUrl = `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}`;

    try {
        // Fetch popular movies from TMDB API
        const response = await fetch(popularMoviesUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch popular movies from TMDB");
        }

        // Parse JSON data
        const moviesData = await response.json();

        // Return the data as a JSON response
        return Response.json(moviesData);

    } catch (error) {
        console.error("Error fetching movies:", error);

        // Return a 500 response if something goes wrong
        return new Response(
            JSON.stringify({ error: "Failed to fetch popular movies" }),
            { status: 500 }
        );
    }
}
