import { useMemo } from 'react';
import { SHORT_MOVIE_DURATION } from '../utils/constants';

export const useMovies = (movies, query = '', isShort) => {
  const searchedMovies = useMemo(() => {
    const allMovies = [...movies].filter(({ nameRU }) => {
      return nameRU.toLowerCase().includes(query.toLowerCase().trim());
    });
    return query
      ? isShort
        ? allMovies.filter(({ duration }) => duration <= SHORT_MOVIE_DURATION)
        : allMovies
      : movies;
  }, [query, movies, isShort]);

  return searchedMovies;
};
