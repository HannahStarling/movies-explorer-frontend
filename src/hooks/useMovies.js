import { useMemo } from 'react';

export const useMovies = (movies, query) => {
  const searchedMovies = useMemo(() => {
    return query
      ? [...movies].filter(({ nameRU }) => nameRU.toLowerCase().includes(query.toLowerCase()))
      : [];
  }, [query, movies]);

  return searchedMovies;
};
