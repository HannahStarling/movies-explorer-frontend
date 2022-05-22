import React, { useState } from 'react';
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
  ...movie
}) => {
  const { duration, nameRU, nameEN, trailer, image } = data2movie(movie);
  const isSaved = savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickButton = (e) => {
    setIsDisabled(true);
    const likeBtn = e.currentTarget;
    if (button === 'fav') {
      const isSaved = likeBtn.classList.contains(SAVED_MOVIE_CLASSNAME);
      if (!isSaved) {
        const duration = movie.duration;
        onSaveMovie({ ...data2movie(movie), duration }, setIsDisabled);
        likeBtn.classList.add(SAVED_MOVIE_CLASSNAME);
      }
      if (isSaved) {
        hadleClickDeleteButton();
        likeBtn.classList.remove(SAVED_MOVIE_CLASSNAME);
      }
    }
    if (button === 'delete') {
      hadleClickDeleteButton(setIsDisabled);
    }
  };

  function hadleClickDeleteButton(setIsDisabled) {
    onDeleteMovie(movie._id, movie.id, setIsDisabled);
  }

  return (
    <li>
      <figure className='movie'>
        <figcaption className='movie__caption'>
          <h3 className='movie__title'>{nameRU || nameEN}</h3>
          <Paragraph text={duration} className='movie__duration' />
          <Button
            disabled={isDisabled}
            onClick={onClickButton}
            className={`movie__btn movie__btn-${button} ${
              isSaved ? SAVED_MOVIE_CLASSNAME : ''
            }`.trim()}
          />
        </figcaption>
        <Anchor
          className={'movie__link'}
          link={trailer}
          aria-label={`Открыть в соседней вкладке трейлер фильма "${nameRU || nameEN}"`}
        >
          <img src={image} alt={nameRU || nameEN} className='movie__image' />
        </Anchor>
      </figure>
    </li>
  );
};
