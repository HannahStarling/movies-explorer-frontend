import { isUrlValid } from '../helpers/isUrlValid';
import { MOVIES_API_URL, MAIN_API_URL } from '../api/constants';
import NOT_AVAILABLE_IMAGE from '../../images/not-available.svg';

export const data2movie = (movie) => {
  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    return `${hours}ч ${minutes}м`;
  };

  const getFullSource = (src) => {
    if (!src) return `${MAIN_API_URL}${NOT_AVAILABLE_IMAGE}`;
    return isUrlValid(src) ? src : `${MOVIES_API_URL}${src.url}`;
  };

  const getTrailerUrl = (trailer) => {
    return isUrlValid(trailer) ? trailer : `https://www.youtube.com`;
  };

  const DATA_DONT_EXIST = 'Нет данных';
  const duration = convertDuration(movie.duration);
  const src = getFullSource(movie.image);
  const trailer = getTrailerUrl(movie.trailerLink);
  const thumbnail = getFullSource(movie.image.formats.thumbnail);

  return {
    country: movie.country || DATA_DONT_EXIST,
    director: movie.director || DATA_DONT_EXIST,
    duration: duration || DATA_DONT_EXIST,
    year: movie.year || DATA_DONT_EXIST,
    description: movie.description || DATA_DONT_EXIST,
    image: src,
    trailer: trailer,
    nameRU: movie.nameRU || DATA_DONT_EXIST,
    nameEN: movie.nameEN || DATA_DONT_EXIST,
    movieId: movie.id,
    thumbnail: thumbnail,
  };
};
