import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieItem from "./layouts/MovieItem.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    }, {
        path: '/:id',
        element: <MovieItem />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
