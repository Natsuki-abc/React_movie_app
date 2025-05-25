// Reactアプリ全体の設定をしているファイル
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import MovieDetail from './MovieDetail.tsx'

const router = createBrowserRouter([
  { path: '/', Component: App }, // topページにはAppコンポーネントを表示
  { path: 'movies/:movieId', Component: MovieDetail }, // このページにはMovieDetailコンポーネントを表示
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
