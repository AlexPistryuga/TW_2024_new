// MovieItem.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {initialMovie, TMovie} from "../components/MovieAPI.tsx";

const MovieItem = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<TMovie>(initialMovie);

    const getMovieApi = () => {
        fetch(`http://localhost:5000/posters/${id}`)
            .then((res) => res.json())
            .then((json) => setMovie(json))
            .catch((error) => console.error('Error fetching movie:', error));
    };

    useEffect(() => {
        getMovieApi();
    }, []);

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.backdropPath} alt={movie.title}/>
            <h3>{movie.overview}</h3>
        </div>
    );
};

export default MovieItem;
