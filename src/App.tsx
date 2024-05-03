import Sidenav from "./layouts/Sidenav.tsx";
import Main from "./layouts/Main.tsx";
import MovieAPI from "./components/MovieAPI.tsx";
function App() {

    return (
        <>
            <div>
                <Sidenav/>
                <Main/>
                <MovieAPI/>
            </div>
        </>
    )
}

export default App