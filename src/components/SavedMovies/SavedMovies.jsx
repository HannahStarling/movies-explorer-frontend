import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';

export const SavedMovies = ({
  loggedIn,
  onDeleteMovie,
  onSearch,
  movies,
  isLoading,
  isError,
  onCheck,
  isSearched,
}) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <MovieForm onCheck={onCheck} isLoading={isLoading} onSubmit={onSearch} name={'movie'} />
        <Movies
          isSearched={isSearched}
          isError={isError}
          isLoading={isLoading}
          onDeleteMovie={onDeleteMovie}
          movies={movies}
          button={'delete'}
        />
      </main>
      <Footer />
    </>
  );
};
