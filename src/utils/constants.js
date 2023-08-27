// API URL
export const BASE_URL_MAIN = 'https://api.moviefinder.nomoredomains.xyz';
export const BASE_URL_MOVIE = 'https://api.nomoreparties.co';

// localStorage
export const KEYWORD_LOCALSTORAGE_ISLOGGEDIN = 'isLoggedIn';
export const KEYWORD_LOCALSTORAGE_JWT = 'jwt';
export const KEYWORD_LOCALSTORAGE_SEARCH = 'search';

// Keywords
export const KEYWORD_RESIZE = 'resize';

// Pouts
export const MAIN_PATH = '/';
export const MOVIES_PATH = '/movies';
export const SAVED_MOVIES_PATH = '/saved-movies';
export const LOGIN_PATH = '/signin';
export const REGISTER_PATH = '/signup';
export const PROFILE_PATH = '/profile';
export const USER_PATH = '/users/me';
export const ANY_OTHER_PATH = '/*';
export const BEATFILM_PATH = '/beatfilm-movies';

// Metothods fetch
export const CREATION_METHOD = 'POST';
export const CHANGE_METHOD = 'PATCH';
export const REMOVAL_METHOD = 'DELETE';

// External links
export const URL_GITHUB = 'https://github.com/iliabaconoff';
export const URL_STATIC = 'https://iliabaconoff.github.io/how_to_study/';
export const URL_ADAPTIVE = 'https://iliabaconoff.github.io/russian-travel/';
export const URL_APP = 'https://github.com/iliabaconoff/react-mesto-api-full-gha';

// Devices
export const DEVICE_SETTING = {
  mobile: {
    device: 'mobile',
    maxSize: 768,
    maxMovies: 5,
    moreMovies: 2,
  },
  tablet: {
    device: 'tablet',
    maxSize: 1024,
    maxMovies: 8,
    moreMovies: 2,
  },
  desktop: {
    device: 'desktop',
    maxMovies: 16,
    moreMovies: 4,
  }
}

// Timeouts and time
export const TIMEOUT = {
  preloader: 500,
  register: 2000,
  download: 1500,
  resize: 500,
}
export const TIME_SHORT_MOVIES = 40;


// Message texts
export const MESSAGE_TEXT = {
  register: 'Вы успешно зарегистрированы.',
  noEmail: 'Введен некоректный e-mail. Пример корректного ввода: pochta@yandex.ru',
  noName: 'Поле должно содержать только латиницу, кириллицу, пробел или дефис',
  noMovies: 'Нет фильмов для отображения',
  beforeSearching: 'Введите название фильма для начала поиска',
  saveProfile:'Данные успешно изменены'
}

export const REGX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const REGX_NAME = /^[a-zA-Zа-яА-Я\s-]+$/;
