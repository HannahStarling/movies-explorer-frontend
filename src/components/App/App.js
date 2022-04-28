import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { MoviesPage } from '../MoviesPage/MoviesPage';
import { NotFound } from '../NotFound/NotFound';
import { SavedMovies } from '../SavedMovies/SavedMovies';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/saved-movies' element={<SavedMovies />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
