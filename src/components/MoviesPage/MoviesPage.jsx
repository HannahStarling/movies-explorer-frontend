import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';
import { Pagination } from '../Pagination/Pagination';
import { useMovies } from '../../hooks/useMovies';
import { getMoviesData } from '../../utils/api/MoviesApi';

export const MoviesPage = ({ isLoadingData, onSubmit, ...props }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchedMovies = useMovies(movies, query);

  useEffect(() => {
    async function fetchData() {
      const movies = await getMoviesData();
      setMovies(movies);
    }
    fetchData();
  }, []);

  const handleSubmit = (searchedMovies) => {
    setQuery(searchedMovies['movie-search']);
  };

  return (
    <>
      <Header location='/movies' />
      <main>
        <MovieForm name={'movie'} onSubmit={handleSubmit} />
        <Movies movies={searchedMovies} />
        {searchedMovies.length >= 3 && <Pagination />}
      </main>
      <Footer />
    </>
  );
};
