import Sidenav from "./layouts/Sidenav.tsx";
import Main from "./layouts/Main.tsx";
import MovieCard from "./components/MovieCard.tsx";
import MovieCard2 from "./components/MovieCard2.tsx";
import MovieCard3 from "./components/MovieCard3.tsx";
function App() {

  return (
    <>
      <div>
          <Sidenav/>
          <Main/>
          <MovieCard/>
          <MovieCard2/>
          <MovieCard3/>
      </div>
    </>
  )
}

export default App
