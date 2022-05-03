import React from 'react';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import './Movie.css';

export const Movie = ({ location = '/movies', image, nameRU, duration }) => {
  return (
    <li>
      <figure className='movie'>
        <figcaption className='movie__caption'>
          <h3 className='movie__title'>{nameRU}</h3>
          <Paragraph text={duration} className='movie__duration' />
          <Button
            className={`movie__btn movie__btn-${location === '/movies' ? 'fav' : 'delete'}`}
          />
        </figcaption>
        <img src={image} alt={` ${nameRU}`} className='movie__image' />
      </figure>
    </li>
  );
};
