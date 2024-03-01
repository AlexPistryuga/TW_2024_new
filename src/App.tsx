import './App.css'
import ResponsiveAppBar from "./components/ResponsiveAppBar.tsx";
import SimplePaper from "./components/SimplePaper.tsx";
import Paper from "./components/Paper.tsx";

function App() {

  return (
    <>
      <div>

          <ResponsiveAppBar/>
          <SimplePaper/>
          <div className="logo">
              Актеры
          </div>
          <Paper/>


      </div>
    </>
  )
}

export default App
