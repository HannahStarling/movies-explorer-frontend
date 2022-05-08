import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Account } from '../Account/Account';
import { ProtectedRoute } from '../HOC/ProtectedRoute';
import { Login } from '../Login/Login';
import { Main } from '../Main/Main';
import { Modal } from '../Modal/Modal';
import { MoviesPage } from '../MoviesPage/MoviesPage';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { SavedMovies } from '../SavedMovies/SavedMovies';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route
          path='/movies'
          element={<ProtectedRoute loggedIn={loggedIn} component={<MoviesPage />} />}
        />
        <Route
          path='/saved-movies'
          element={<ProtectedRoute loggedIn={loggedIn} component={<SavedMovies />} />}
        />
        <Route
          path='/profile'
          element={<ProtectedRoute loggedIn={loggedIn} component={<Account />} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Modal />
    </>
  );
}

export default App;
