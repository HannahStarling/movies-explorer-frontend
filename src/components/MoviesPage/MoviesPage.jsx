import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';

export const MoviesPage = ({
  savedMovies,
  loggedIn,
  isLoadingData,
  onSubmit,
  onSearch,
  movies,
  onDeleteMovie,
  onSaveMovie,
  ...props
}) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <MovieForm name={'movie'} onSubmit={onSearch} />
        <Movies
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          onSaveMovie={onSaveMovie}
          movies={movies}
          button={'fav'}
        />
      </main>
      <Footer />
    </>
  );
};
