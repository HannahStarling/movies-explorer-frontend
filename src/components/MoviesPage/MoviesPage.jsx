import React from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';
import { Pagination } from '../Pagination/Pagination';
import { movies } from '../../utils/constants';

export const MoviesPage = () => {
  return (
    <>
      <Header location='/movies' />
      <main>
        <MovieForm />
        <Movies />
        {movies.length && <Pagination />}
      </main>
      <Footer />
    </>
  );
};
