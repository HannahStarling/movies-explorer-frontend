export const MAIN_API_URL = 'http://localhost:3000';
export const MOVIES_API_URL = 'https://api.nomoreparties.co';

export const API_ERROR_MESSAGE =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

//     auth
//Перед отправкой формы на фронтенде нужно проверить, что:
// все поля обязательные;
// поле email соответствует шаблону электронной почты;
// поле name содержит только латиницу, кириллицу, пробел или дефис.

//Форма входа тоже должна валидироваться на фронтенде:
// поля email и пароль обязательны,
// поле email должно соответствовать шаблону почты.

export const ENDPOINTS = {
  users: '/api/users/me',
  movies: '/api/movies',
  signup: '/api/signup',
  signin: '/api/signin',
  signout: '/api/signout',
  beatfilm: '/beatfilm-movies',
};
