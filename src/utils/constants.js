const LINKS = {
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

const ROUTES = {
  navigation: [
    {
      id: 1,
      title: 'Главная',
      link: '/',
      isButton: false,
    },
    {
      id: 2,
      title: 'Фильмы',
      link: '/movies',
      isButton: false,
    },
    {
      id: 3,
      title: 'Сохранённые фильмы',
      link: '/saved-movies',
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

export { LINKS, ROUTES };
