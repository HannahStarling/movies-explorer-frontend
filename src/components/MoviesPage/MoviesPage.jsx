import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';
import { useMovies } from '../../hooks/useMovies';
import { getMoviesData } from '../../utils/api/MoviesApi';

export const MoviesPage = ({ loggedIn, isLoadingData, onSubmit, ...props }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchedMovies = useMovies(movies, query);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await getMoviesData();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        //loading - false
      }
    }
    fetchData();
  }, []);

  const handleSubmit = (searchedMovies) => {
    setQuery(searchedMovies['movie-search']);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <MovieForm name={'movie'} onSubmit={handleSubmit} />
        <Movies movies={searchedMovies} button={'fav'} />
      </main>
      <Footer />
    </>
  );
};
