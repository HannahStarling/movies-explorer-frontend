import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Account } from '../Account/Account';
import { Login } from '../Login/Login';
import { Main } from '../Main/Main';
import { MoviesPage } from '../MoviesPage/MoviesPage';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { SavedMovies } from '../SavedMovies/SavedMovies';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/saved-movies' element={<SavedMovies />} />
      <Route path='/profile' element={<Account />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/signin' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
