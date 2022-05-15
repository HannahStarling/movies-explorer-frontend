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
import { authorize, getUser, register, logOut, updateUser } from '../../utils/api/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const showError = (error) => {
    console.log(error);
    // setIsApiError(true);
    // setErrorData(error);
    // setIsErrorModalOpen(true);
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
      // Promise.all([getUserProfile(res.token), getLikedMovies(), getMovies()]).then(
      //   ([userData, likedMoviesData, allMoviesData]) => {
      //     setCurrentUser(userData);
      //     setLikedMovies(likedMoviesData);
      //     setFiltredLikedMovies(likedMoviesData);
      //     setAllMovies(allMoviesData);
      //     setIsUserLoggedIn(true);
      //     history.push('/movies');
      //   }
      // );
      setLoggedIn(true);
      navigate('/movies');
      //заполнить информацией профиль и сохраненные карточки
    } catch (error) {
      showError(error);
    }
    //if (!email || !password) return;
  }

  async function onLogOut() {
    try {
      await logOut();
      setLoggedIn(false);
      //localStorage.removeItem();
    } catch (error) {
      showError(error);
    }
  }

  useEffect(() => {
    async function tokenCheck() {
      try {
        const user = await getUser();
        setCurrentUser(user);
        setLoggedIn(true);
      } catch (error) {
        showError(error);
      }
    }
    tokenCheck();
  }, [navigate]);

  // useEffect(() => {
  //   if (loggedIn) {
  //     api
  //       .getAllInitialData()
  //       .then((data) => {
  //         const [cards, info] = data;
  //         setCurrentUser(info);
  //         setCards(cards);
  //       })
  //       .catch(() => console.log('Невозможно получить доступ, если вы не авторизованы'));
  //   }
  // }, [loggedIn]);

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
              <ProtectedRoute loggedIn={loggedIn} component={<MoviesPage loggedIn={loggedIn} />} />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn} component={<SavedMovies loggedIn={loggedIn} />} />
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
        <Modal />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
