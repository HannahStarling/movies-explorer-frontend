import React from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MovieForm } from '../MovieForm/MovieForm';
import { Movies } from '../Movies/Movies';
import { Pagination } from '../Pagination/Pagination';

export const MoviesPage = () => {
  return (
    <>
      <Header />
      <main>
        <MovieForm />
        <Movies />
        <Pagination />
      </main>
      <Footer />
    </>
  );
};
