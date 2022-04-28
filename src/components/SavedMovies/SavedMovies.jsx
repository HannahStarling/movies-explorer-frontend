import React from 'react';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';

export const SavedMovies = () => {
  return (
    <>
      <Header location='/saved-movies' />
      <main>
        <MovieForm />
        <Movies location='/saved-movies' />
      </main>
      <Footer />
    </>
  );
};
