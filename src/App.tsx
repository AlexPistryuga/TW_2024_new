import Sidenav from "./layouts/Sidenav.tsx";
import Main from "./layouts/Main.tsx";
import MovieCard from "./components/MovieCard.tsx";
import MovieCard2 from "./components/MovieCard2.tsx";
import MovieCard3 from "./components/MovieCard3.tsx";
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
