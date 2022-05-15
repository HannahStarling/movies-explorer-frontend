import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';

export const SavedMovies = ({ loggedIn, onDeleteMovie, onSearch, movies }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <MovieForm onSubmit={onSearch} name={'movie'} />
        <Movies onDeleteMovie={onDeleteMovie} movies={movies} button={'delete'} />
      </main>
      <Footer />
    </>
  );
};
