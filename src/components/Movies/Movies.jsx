import React, { useCallback, useEffect, useState } from 'react';
import { List } from '../List/List';
import { Movie } from '../Movie/Movie';
import { InfoBanner } from '../InfoBanner/InfoBanner';
import { Section } from '../Section/Section';
import { Pagination } from '../Pagination/Pagination';
import { Preloader } from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';
import {
  MOVIES_ROUTE,
  SAVED_MOVIE_ROUTE,
  ERROR_MESSAGES,
  WARNING_TEXT,
} from '../../utils/constants';
import './Movies.css';

export const Movies = ({
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  button,
  movies,
  isLoading,
  isError,
  isSearched,
}) => {
  const getWidth = () => {
    return document.documentElement.clientWidth;
  };

  const [moviesNumber, setMoviesNumber] = useState(0);
  const [counterAddMovies, setCounterAddMovies] = useState(0);
  const [renderingMovies, setRenderingMovies] = useState([]);
  const [size, setSize] = useState({ width: getWidth() });

  const { pathname } = useLocation();

  const isMoviesPage = pathname === MOVIES_ROUTE;
  const isSavedMoviesPage = pathname === SAVED_MOVIE_ROUTE;

  const BANNER_TEXT = isMoviesPage ? WARNING_TEXT.MOVIES : WARNING_TEXT.SAVED_MOVIES;

  useEffect(() => {
    if (movies.length && isMoviesPage) {
      setRenderingMovies(movies);
    } else if (isSavedMoviesPage) {
      setRenderingMovies(movies);
    }
  }, [button, isMoviesPage, isSavedMoviesPage, movies]);

  useEffect(() => {
    let debounce = null;

    const handleResize = () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setSize({ width: getWidth() });
      }, 150);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayWidthCheck = useCallback(() => {
    if (size.width >= 1023) {
      if (!moviesNumber) setMoviesNumber(12);
      setCounterAddMovies(3);
    } else if (size.width >= 719) {
      if (!moviesNumber) setMoviesNumber(8);
      setCounterAddMovies(2);
    } else if (size.width >= 320) {
      if (!moviesNumber) setMoviesNumber(5);
      setCounterAddMovies(2);
    }
  }, [moviesNumber, size.width]);

  useEffect(() => {
    displayWidthCheck();
  }, [displayWidthCheck, size.width]);

  function addMoreMovie() {
    setMoviesNumber(moviesNumber + counterAddMovies);
  }

  return (
    <Section className='movies'>
      {!!movies.length ? (
        <List listStyle='movies__list'>
          {renderingMovies.slice(0, moviesNumber).map((movie) => {
            return (
              <Movie
                isDisabledButton={isLoading}
                key={movie.id || movie._id}
                savedMovies={savedMovies}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                button={button}
                {...movie}
              />
            );
          })}
        </List>
      ) : (
        <>
          {!isLoading && isError && <InfoBanner info={ERROR_MESSAGES.REQUEST} />}
          {!isLoading && isSearched && <InfoBanner info={ERROR_MESSAGES.NOT_FOUND} />}
          {!isLoading && !isSearched && <InfoBanner info={BANNER_TEXT} />}
        </>
      )}
      {!!movies.length && renderingMovies.length >= moviesNumber && (
        <Pagination onButtonClick={addMoreMovie} />
      )}
      {isLoading && !renderingMovies.length && <Preloader />}
    </Section>
  );
};
