import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';

export const MoviesPage = ({
  savedMovies,
  loggedIn,
  isLoading,
  onSearch,
  movies,
  onDeleteMovie,
  onSaveMovie,
  isError,
  isSearched,
  onCheck,
}) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <MovieForm onCheck={onCheck} name={'movie'} onSubmit={onSearch} />
        <Movies
          isSearched={isSearched}
          isError={isError}
          isLoading={isLoading}
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
