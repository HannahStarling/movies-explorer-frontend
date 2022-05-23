import { request } from './helpers';
import { MAIN_API_URL, ENDPOINTS } from './constants';

const { signin, signout, signup, users, movies } = ENDPOINTS;

// GET /api/users/me возвращает информацию о пользователе (email и имя);
export const getUser = () => request(MAIN_API_URL, { url: users, method: 'GET' });
// PATCH /api/users/me — обновляет информацию о пользователе;
export const updateUser = ({ name, email }) =>
  request(MAIN_API_URL, { url: users, method: 'PATCH', body: { name, email } });
// GET /api/movies все сохранённые пользователем фильмы;
export const getMovies = () => request(MAIN_API_URL, { url: movies, method: 'GET' });
// POST /api/movies создаёт фильм с переданными в теле данными;
export const saveMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  movieId,
}) =>
  request(MAIN_API_URL, {
    url: movies,
    body: {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      movieId,
    },
  });
// DELETE /api/movies/:id удаляет сохранённый фильм по _id;
export const deleteMovie = (id) =>
  request(MAIN_API_URL, { url: `${movies}/${id}`, method: 'DELETE' });
// POST /api/signup создаёт пользователя с переданными в теле данными;
export const register = (name, password, email) =>
  request(MAIN_API_URL, { url: signup, body: { name, password, email } });
//POST вход пользователя
export const authorize = (password, email) =>
  request(MAIN_API_URL, { url: signin, body: { password, email } });
// DELETE /api/signout выход пользователя;
export const logOut = () => request(MAIN_API_URL, { url: signout, method: 'DELETE' });
