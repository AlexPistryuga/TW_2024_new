import { useEffect, useState } from 'react';

function MovieApi() {

    const [movieList, setMovieList] = useState([]);

    const getMovieApi = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=a0c06e50f9219fec7dd308b2a0038c66")
            .then(res => res.json())
            .then(json => setMovieList(json.results))
            .catch(error => console.error('Error fetching movies:', error));
    }

    useEffect(() => {
        getMovieApi();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {movieList.map((movie, index) => (
                <img
                    key={index}
                    style={{ width: "350px", height: "500px", margin: "10px 10px 30px 10px" }}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            ))}
        </div>
    );
}

export default MovieApi;
