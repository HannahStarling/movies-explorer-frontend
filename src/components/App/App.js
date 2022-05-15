import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Account } from '../Account/Account';
import { ProtectedRoute } from '../HOC/ProtectedRoute';
import { Login } from '../Login/Login';
import { Main } from '../Main/Main';
import { Modal } from '../Modal/Modal';
import { MoviesPage } from '../MoviesPage/MoviesPage';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import {
  authorize,
  getUser,
  register,
  logOut,
  updateUser,
  getMovies,
  saveMovie,
  deleteMovie,
} from '../../utils/api/MainApi';
import { useMovies } from '../../hooks/useMovies';
import { getMoviesData } from '../../utils/api/MoviesApi';
import { MAIN_ROUTE, MOVIES_ROUTE } from '../../utils/constants';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [queryMovies, setQueryMovies] = useState('');
  const [querySavedMovies, setQuerySavedMovies] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState({ hasError: false, name: '', status: '', error: '' });

  const navigate = useNavigate();
  // localStorage.clear();

  const searchedMovies = useMovies(movies, queryMovies, isChecked);
  const searchedSavedMovies = useMovies(savedMovies, querySavedMovies, isChecked);

  const searchMovies = (searchedMovies) => {
    setQueryMovies(searchedMovies['movie-search']);
    setIsChecked(!!searchedMovies['movie-filter']);
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('moviesQuery', JSON.stringify(queryMovies));
    localStorage.setItem('moviesIsChecked', JSON.stringify(isChecked));
    setIsSearched(true);
  };

  const searchSavedMovies = (searchedMovies) => {
    setQuerySavedMovies(searchedMovies['movie-search']);
    setIsChecked(!!searchedMovies['movie-filter']);
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    localStorage.setItem('savedMoviesQuery', JSON.stringify(querySavedMovies));
    localStorage.setItem('savedMoviesIsChecked', JSON.stringify(isChecked));
  };

  const showError = ({ name, status, ...error }) => {
    setError((prev) => ({ ...prev, hasError: true, name, status, ...error }));
  };

  const handleCloseModal = () => {
    setError((prev) => ({ ...prev, hasError: false, name: '', status: '', error: '' }));
  };

  async function handleRegistration({ name, password, email }) {
    try {
      await register(name, password, email);
      handleLogin({ password, email });
    } catch (error) {
      showError(error);
    }
  }

  async function handleLogin({ password, email }) {
    try {
      await authorize(password, email);
      setLoggedIn(true);
      navigate(MOVIES_ROUTE);
    } catch (error) {
      console.log(error);
      showError(error);
    }
  }

  async function onLogOut() {
    try {
      await logOut();
    } catch (_) {
      setLoggedIn(false);
      navigate(MAIN_ROUTE);
      setIsSearched(false);
      localStorage.clear();
    }
  }

  useEffect(() => {
    async function tokenCheck() {
      try {
        setIsLoading(true);
        const user = await getUser();
        const [movies, savedMovies] = await Promise.all([getMoviesData(), getMovies()]);
        setSavedMovies(savedMovies);
        setMovies(movies);
        setCurrentUser(user);
        setLoggedIn(true);
      } catch (_) {
        setTimeout(() => {
          showError({
            name: 'Чтобы получить доступ к возможностям сайта необходимо пройти авторизацию',
            status: 'Информация о сайте',
          });
        }, 10000);
      } finally {
        setIsLoading(false);
      }
    }
    tokenCheck();
  }, []);

  async function onSaveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) {
    try {
      const newSavedMovie = await saveMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink: trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      });
      setSavedMovies([...savedMovies, newSavedMovie]);
    } catch (error) {
      showError(error);
    }
  }

  async function unSavedMovie(_id, id) {
    if (_id) {
      try {
        const deletedMovie = await deleteMovie(_id);
        const newSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie._id !== deletedMovie._id,
        );
        setSavedMovies(newSavedMovies);
      } catch (error) {
        showError(error);
      }
    }
    if (id) {
      const selectedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === id);
      setSavedMovies(savedMovies.filter((savedMovie) => savedMovie.movieId !== id));
      if (selectedMovie) {
        await deleteMovie(selectedMovie._id);
      }
    }
  }

  const updateUserInfo = async ({ name, email }) => {
    try {
      const userInfo = await updateUser({ name, email });
      setCurrentUser(userInfo);
    } catch (error) {
      showError(error);
    }
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route path='/signup' element={<Register onAuth={handleRegistration} />} />
          <Route path='/signin' element={<Login onAuth={handleLogin} />} />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={
                  <MoviesPage
                    onDeleteMovie={unSavedMovie}
                    movies={isSearched ? searchedMovies : []}
                    savedMovies={savedMovies}
                    onSaveMovie={onSaveMovie}
                    onSearch={searchMovies}
                    loggedIn={loggedIn}
                  />
                }
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={
                  <SavedMovies
                    onDeleteMovie={unSavedMovie}
                    movies={searchedSavedMovies}
                    onSearch={searchSavedMovies}
                    loggedIn={loggedIn}
                  />
                }
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={
                  <Account loggedIn={loggedIn} onLogOut={onLogOut} onUpdate={updateUserInfo} />
                }
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Modal
          isOpen={error.hasError}
          name={error.name}
          status={error.status}
          onClose={handleCloseModal}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
