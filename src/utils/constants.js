export const LINKS = {
  socials: [
    {
      id: 'Facebook',
      link: 'https://ru-ru.facebook.com',
      text: 'Facebook',
    },
    {
      id: 'Github',
      link: 'https://github.com/HannahStarling',
      text: 'Github',
    },
  ],
  sites: [
    {
      id: 'Yandex.Practicum',
      link: 'https://practicum.yandex.ru',
      text: 'Яндекс.Практикум',
    },
  ],
  portfolio: [
    {
      id: 'How-to-learn',
      link: 'https://hannahstarling.github.io/how-to-learn/',
      text: ' Статичный сайт',
    },
    {
      id: 'Yandex.Practicum',
      link: 'https://hannahstarling.github.io/russian-travel/',
      text: 'Адаптивный сайт',
    },
    {
      id: 'Mesto-full',
      link: 'https://mesto.mshannahstarling.nomoredomains.work',
      text: 'Одностраничное приложение',
    },
  ],
};

export const MAIN_ROUTE = '/';
export const MOVIES_ROUTE = '/movies';
export const SAVED_MOVIE_ROUTE = '/saved-movies';

export const ROUTES = {
  navigation: [
    {
      id: 1,
      title: 'Главная',
      link: MAIN_ROUTE,
      isButton: false,
    },
    {
      id: 2,
      title: 'Фильмы',
      link: MOVIES_ROUTE,
      isButton: false,
    },
    {
      id: 3,
      title: 'Сохранённые фильмы',
      link: SAVED_MOVIE_ROUTE,
      isButton: false,
    },
  ],
  account: [
    {
      id: 4,
      link: '/profile',
      title: 'Аккаунт',
      isButton: false,
    },
  ],
  auth: [
    {
      id: 5,
      link: '/signup',
      title: 'Регистрация',
      isButton: false,
    },
    {
      id: 6,
      link: '/signin',
      title: 'Войти',
      isButton: true,
    },
  ],
};

export const SHORT_MOVIE_DURATION = 40;
export const SAVED_MOVIE_CLASSNAME = 'movie__btn-fav_active';

export const WARNING_TEXT = {
  SAVED_MOVIES: 'В избранном пока ничего нет.',
  MOVIES: 'Введите поисковый запрос для отображения фильмов.',
};

export const SUCCESS_MESSAGES = {
  AUTH: 'Аутентификация прошла успешно',
  PROFILE_UPDATE: 'Обновление профиля прошло успешно',
};

export const ERROR_MESSAGES = {
  BAD_REQUEST: 'Неправльно введён логин или пароль.',
  NOT_FOUND: 'По запросу ничего не найдено.',
  CONFLICT: 'Пользователь с таким e-mail уже зарегестрирован.',
  INTERNAL: 'Произошла ошибка на стороне сервера.',
  REGISTRATION: 'При регистрации пользователя произошла ошибка.',
  PROFILE_UPDATE: 'При обновлении профиля произошла ошибка.',
  SAVED_MOVIES: 'При добавлении фильма в избранное возникла ошибка.',
  LOGOUT: 'Не удалось выйти из аккаунта. Подождите немного и попробуйте ещё раз.',
  REQUEST:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
};

export const PATTERNS = {
  NAME: /^[А-Яа-яa-zA-Z- ]+$/,
  EMAIL: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,4})$/i,
  PASSWORD: /^[A-Za-z0-9-!@#$%^&*]+$/,
};
