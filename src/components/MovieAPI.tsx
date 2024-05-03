// MovieApi.tsx
import { useEffect, useState } from 'react';
import MovieCustom from '../components/MovieCustom';

export interface TMovie {
    id: string,
    title: string,
    backdropPath: string,
    overview: string,
    slogan: string,
    director: string
}

export const initialMovie: TMovie = {
    id: '',
    title: '',
    backdropPath: '',
    overview: '',
    slogan: '',
    director: ''
}

function MovieApi() {
    const [movieList, setMovieList] = useState<TMovie[]>([]);

    const getMovieApi = () => {
        fetch(`http://localhost:5000/posters`)
            .then((res) => res.json())
            .then((json) => setMovieList(json))
            .catch((error) => console.error('Error fetching movies:', error));
    };

    useEffect(() => {
        getMovieApi();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, background: 'SaddleBrown', paddingTop:'60px'}}>
            {movieList.map((movie, index) => (
                <MovieCustom
                    key={index}
                    id={movie.id}
                    slogan={movie.slogan}
                    title={movie.title}
                    backdropPath={movie.backdropPath}
                    overview={movie.overview}
                    director={movie.director}
                />
            ))}
        </div>
    );
}

export default MovieApi;
