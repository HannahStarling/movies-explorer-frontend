import request from './helpers';
import { MAIN_API_URL, ENDPOINTS } from './constants';

const { signin, signout, signup, users, movies } = ENDPOINTS;

// GET /api/users/me возвращает информацию о пользователе (email и имя);
export const getUser = () => request(MAIN_API_URL, { url: users, method: 'GET' });
// PATCH /api/users/me — обновляет информацию о пользователе;
export const updateUser = () => request(MAIN_API_URL, { url: users, method: 'PATCH' });
// GET /api/movies все сохранённые пользователем фильмы;
export const getMovies = () => request(MAIN_API_URL, { url: movies, method: 'GET' });
// POST /api/movies создаёт фильм с переданными в теле данными;
export const createMovie = () => request(MAIN_API_URL, { url: movies });
// DELETE /api/movies/:id удаляет сохранённый фильм по _id;
export const deleteMovie = (id) =>
  request(MAIN_API_URL, { url: `${movies}${id}`, method: 'DELETE' });
// POST /api/signup создаёт пользователя с переданными в теле данными;
export const register = (password, email) =>
  request(MAIN_API_URL, { url: signup, body: { password, email } });
//POST вход пользователя
export const authorize = (password, email) =>
  request(MAIN_API_URL, { url: signin, body: { password, email } });
// DELETE /api/signout выход пользователя;
export const signOut = () => request(MAIN_API_URL, { url: signout, method: 'DELETE' });
