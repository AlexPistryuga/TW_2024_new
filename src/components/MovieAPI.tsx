// MovieApi.jsx
import React, { useEffect, useState } from 'react';
import MovieCustom from '../components/MovieCustom.tsx';

type TMovie = {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
    genres: string[];
    production_countries: string[];
    production_companies: string[];
    spoken_languages: string[];
};

function MovieApi() {
    const [movieList, setMovieList] = useState<TMovie[]>([]);

    const getMovieApi = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a0c06e50f9219fec7dd308b2a0038c66`)
            .then((res) => res.json())
            .then((json) => setMovieList(json.results))
            .catch((error) => console.error('Error fetching movies:', error));
    };

    useEffect(() => {
        getMovieApi();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10}}>
            {movieList.map((movie, index) => (
                <MovieCustom
                    key={index}
                    title={movie.title}
                    backdropPath={movie.backdrop_path}
                />
            ))}
        </div>
    );
}

export default MovieApi;
