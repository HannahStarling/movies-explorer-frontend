import React, { useEffect, useState } from 'react';
import { useMovies } from '../../hooks/useMovies';
import { getMovies } from '../../utils/api/MainApi';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';

export const SavedMovies = ({ loggedIn }) => {
  // const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');

  // const searchedMovies = useMovies(movies, query);

  // useEffect(() => {
  //   async function fetchData() {
  //     // сохраненные фильмы из базы
  //     try {
  //       const movies = await getMovies();
  //       setMovies(movies);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       //loading - false
  //     }
  //   }
  //   fetchData();
  // }, []);

  // const handleSubmit = (searchedMovies) => {
  //   setQuery(searchedMovies['movie-search']);
  // };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <MovieForm name={'movie'} />
        {/*         <Movies movies={searchedMovies} button={'delete'} /> */}
      </main>
      <Footer />
    </>
  );
};
