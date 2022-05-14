import React from 'react';
import { data2movie } from '../../utils/decorators/data-to-movie';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import './Movie.css';

export const Movie = ({ button, ...movie }) => {
  const { duration, nameRU, nameEN, trailer, image } = data2movie(movie);

  return (
    <li>
      <figure className='movie'>
        <figcaption className='movie__caption'>
          <h3 className='movie__title'>{nameRU || nameEN}</h3>
          <Paragraph text={duration} className='movie__duration' />
          <Button className={`movie__btn movie__btn-${button}`} />
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
