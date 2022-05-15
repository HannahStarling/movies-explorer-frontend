import React from 'react';
import { SAVED_MOVIE_CLASSNAME } from '../../utils/constants';
import { data2movie } from '../../utils/decorators/data-to-movie';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import './Movie.css';

export const Movie = ({
  savedMovies,
  button,
  onSaveMovie,
  onDeleteMovie,
  likedMovies,
  isDisabledButton,
  ...movie
}) => {
  const { duration, nameRU, nameEN, trailer, image } = data2movie(movie);
  const isSaved = savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id);

  const onClickButton = (e) => {
    const likeBtn = e.currentTarget;
    if (button === 'fav') {
      const isSaved = likeBtn.classList.contains(SAVED_MOVIE_CLASSNAME);
      if (!isSaved) {
        const duration = movie.duration;
        onSaveMovie({ ...data2movie(movie), duration });
        likeBtn.classList.add(SAVED_MOVIE_CLASSNAME);
      }
      if (isSaved) {
        hadleClickDeleteButton();
        likeBtn.classList.remove(SAVED_MOVIE_CLASSNAME);
      }
    }
    if (button === 'delete') {
      hadleClickDeleteButton();
    }
  };

  function hadleClickDeleteButton() {
    onDeleteMovie(movie._id, movie.id);
  }

  return (
    <li>
      <figure className='movie'>
        <figcaption className='movie__caption'>
          <h3 className='movie__title'>{nameRU || nameEN}</h3>
          <Paragraph text={duration} className='movie__duration' />
          <Button
            onClick={onClickButton}
            className={`movie__btn movie__btn-${button} ${
              isSaved ? SAVED_MOVIE_CLASSNAME : ''
            }`.trim()}
          />
        </figcaption>
        <Anchor
          link={trailer}
          aria-label={`Открыть в соседней вкладке трейлер фильма "${nameRU || nameEN}"`}
        >
          <img src={image} alt={nameRU || nameEN} className='movie__image' />
        </Anchor>
      </figure>
    </li>
  );
};
