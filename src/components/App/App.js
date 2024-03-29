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
import { MAIN_ROUTE, MOVIES_ROUTE, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../utils/constants';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ hasError: false, name: '', status: '', error: '' });

  const [currentUser, setCurrentUser] = useState({});
  const [userChangingStatus, setUserChangingStatus] = useState('');

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [queryMovies, setQueryMovies] = useState('');
  const [querySavedMovies, setQuerySavedMovies] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [isSavedSearched, setIsSavedSearched] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const searchedMovies = useMovies(movies, queryMovies, isChecked);
  const searchedSavedMovies = useMovies(savedMovies, querySavedMovies, isChecked);

  useEffect(() => {
    async function tokenCheck() {
      try {
        setIsLoading(true);
        const user = await getUser();
        setLoggedIn(true);
        const savedMovies = await getMovies();
        setSavedMovies(savedMovies);
        setCurrentUser(user);
      } catch (_) {
        setLoggedIn(false);
        setTimeout(() => {
          showError({
            custom: 'Чтобы получить доступ к возможностям сайта необходимо пройти авторизацию',
            status: 'Информация о сайте',
          });
          setTimeout(() => {
            setError((prev) => ({ ...prev, name: '', status: '', hasError: false }));
          }, 3000);
        }, 2500);
      } finally {
        setIsLoading(false);
      }
    }
    tokenCheck();
  }, []);

  const searchMovies = (searchedMovies) => {
    setIsLoading(true);
    setQueryMovies(searchedMovies['movie-search']);
    setIsChecked(!!searchedMovies['movie-filter']);
    localStorage.setItem('moviesQuery', JSON.stringify(searchedMovies['movie-search']));
    localStorage.setItem('moviesIsChecked', JSON.stringify(!!searchedMovies['movie-filter']));
    setIsSearched(true);
    setIsLoading(false);
  };

  const searchSavedMovies = (searchedMovies) => {
    setIsLoading(true);
    setQuerySavedMovies(searchedMovies['movie-search']);
    setIsChecked(!!searchedMovies['movie-filter']);
    localStorage.setItem('savedMoviesQuery', JSON.stringify(searchedMovies['movie-search']));
    localStorage.setItem('savedMoviesIsChecked', JSON.stringify(!!searchedMovies['movie-filter']));
    setIsSavedSearched(true);
    setIsLoading(false);
  };

  const showError = ({ custom = ERROR_MESSAGES.INTERNAL, status, ...error }) => {
    const { BAD_REQUEST, NOT_FOUND, CONFLICT, INTERNAL, TO_MANY_REQUESTS } = ERROR_MESSAGES;
    let name;
    switch (status) {
      case 400:
        name = BAD_REQUEST;
        break;
      case 404:
        name = NOT_FOUND;
        break;
      case 409:
        name = CONFLICT;
        break;
      case 429:
        name = TO_MANY_REQUESTS;
        break;
      case 500:
        name = INTERNAL;
        break;
      default:
        name = custom;
        break;
    }
    setError((prev) => ({ ...prev, hasError: true, name, status, ...error }));
  };

  const handleCloseModal = () => {
    setError((prev) => ({ ...prev, hasError: false, name: '', status: '', error: '' }));
  };

  async function handleRegistration({ name, password, email }) {
    try {
      setIsLoading(true);
      await register(name, password, email);
      handleLogin({ password, email });
    } catch (error) {
      showError({ custom: ERROR_MESSAGES.REGISTRATION, status: error.status, ...error });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const movies = await getMoviesData();
        setMovies(movies);
      } catch (error) {
        showError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (isSearched) {
      if (!movies.length) {
        getMovies();
      }
    }
  }, [isSearched, movies.length]);

  async function handleLogin({ password, email }) {
    try {
      setIsLoading(true);
      const { message } = await authorize(password, email);
      if (message) {
        setLoggedIn(true);
        const [savedMovies, user] = await Promise.all([getMovies(), getUser()]);
        setSavedMovies(savedMovies);
        setCurrentUser(user);
        navigate(MOVIES_ROUTE);
      }
    } catch (error) {
      showError({ custom: ERROR_MESSAGES.BAD_REQUEST, status: error.status, ...error });
    } finally {
      setIsLoading(false);
    }
  }

  async function onLogOut() {
    try {
      await logOut();
      setLoggedIn(false);
      navigate(MAIN_ROUTE);
      setIsSearched(false);
      localStorage.clear();
    } catch (error) {
      showError({ custom: ERROR_MESSAGES.LOGOUT, status: error.status, ...error });
    }
  }

  async function onSaveMovie(
    {
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
    },
    setIsDisabled,
  ) {
    try {
      setIsLoading(true);
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
      showError({ custom: ERROR_MESSAGES.SAVED_MOVIES, status: error.status, ...error });
    } finally {
      setIsDisabled(false);
      setIsLoading(false);
    }
  }

  async function unSavedMovie(_id, id, setIsDisabled) {
    if (_id) {
      try {
        setIsLoading(true);
        const deletedMovie = await deleteMovie(_id);
        const newSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie._id !== deletedMovie._id,
        );
        setSavedMovies(newSavedMovies);
      } catch (error) {
        showError({ custom: ERROR_MESSAGES.REQUEST, status: error.status, ...error });
      } finally {
        setIsDisabled(false);
        setIsLoading(false);
      }
    }
    if (id) {
      try {
        const selectedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === id);
        setSavedMovies(savedMovies.filter((savedMovie) => savedMovie.movieId !== id));
        if (selectedMovie) {
          setIsLoading(true);
          await deleteMovie(selectedMovie._id);
        }
      } catch (error) {
        showError({ custom: ERROR_MESSAGES.REQUEST, status: error.status, ...error });
      } finally {
        setIsDisabled(false);
        setIsLoading(false);
      }
    }
  }

  const updateUserInfo = async ({ name, email }) => {
    try {
      setIsLoading(true);
      const userInfo = await updateUser({ name, email });
      setCurrentUser(userInfo);
      setUserChangingStatus(SUCCESS_MESSAGES.PROFILE_UPDATE);
    } catch (error) {
      showError({ custom: ERROR_MESSAGES.PROFILE_UPDATE, status: error.status, ...error });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setUserChangingStatus('');
      }, 3000);
    }
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route
            path='/signup'
            element={
              <Register isLoading={isLoading} errorText={error.name} onAuth={handleRegistration} />
            }
          />
          <Route
            path='/signin'
            element={<Login isLoading={isLoading} errorText={error.name} onAuth={handleLogin} />}
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={
                  <MoviesPage
                    onCheck={setIsChecked}
                    isSearched={isSearched}
                    isError={error.hasError}
                    isLoading={isLoading}
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
                    isSearched={isSavedSearched}
                    onCheck={setIsChecked}
                    isError={error.hasError}
                    isLoading={isLoading}
                    onDeleteMovie={unSavedMovie}
                    movies={isSavedSearched ? searchedSavedMovies : savedMovies}
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
                  <Account
                    infoMessage={userChangingStatus}
                    isLoading={isLoading}
                    loggedIn={loggedIn}
                    onLogOut={onLogOut}
                    onUpdate={updateUserInfo}
                  />
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
