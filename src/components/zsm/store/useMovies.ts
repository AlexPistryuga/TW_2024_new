import { create } from "zustand";

const INITIAL_MOVIE_STATE = {
    id: 0,
    title: "",
    poster_path: "",
    backdrop_path: "",
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    genres: [],
    production_countries: [],
    production_companies: [],
    spoken_languages: [],
}

type TMovie = typeof INITIAL_MOVIE_STATE;
type TMovies = { movieList: TMovie[] };

type TMovieActions = {
    setInitialMovie: (movieList: TMovie[]) => void;
    fetchMovies: () => void;
};

type TMovieGetter = {
    getMovies: () => TMovie[];
};

const INITIAL_MOVIES_STATE = {
    movieList: [] as TMovie[],
};

const useMovies = create<TMovies & TMovieActions & TMovieGetter>((set, get) => ({
    ...INITIAL_MOVIES_STATE,

    fetchMovies: async () => {
        try {
            set({ loading: true });
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a0c06e50f9219fec7dd308b2a0038c66');
            const json = await res.json();
            set({ movieList: json.results });
        } catch (e) {
            console.error(e);
        } finally {
            set({ loading: false });
            console.log('>>> finally');
        }
    },

    getMovies: () => get().movieList,

    setInitialMovie: (movieList) => set({ movieList }),
}));

export default useMovies;
