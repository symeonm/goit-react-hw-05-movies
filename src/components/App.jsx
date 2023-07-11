import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout';


const Home = lazy(()=> import('../pages/Home'))
const Movies = lazy(()=> import('../pages/Movies'))
const MovieDetails = lazy(()=> import('../pages/MovieDetails'))
const Cast = lazy(()=> import('./Cast'))
const Reviews = lazy(()=> import('./Reviews'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:filmId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast/>}>Cast</Route>
          <Route path='reviews' element={<Reviews/>}>Reviews</Route>
        </Route>
      </Route>
    </Routes>
  );
}
