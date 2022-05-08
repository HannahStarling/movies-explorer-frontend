import React from 'react';
import './CheckBox.css';

export const CheckBox = () => {
  return (
    <fieldset className={'movie-filter'}>
      <span className='movie-filter__label'>Короткометражки</span>{' '}
      <input type={'checkbox'} className='movie-filter__input' id={'movie-filter'} name={'movie-filter'} />
      <label
        htmlFor='movie-filter'
        className='movie-filter__checkbox'
        aria-label='Выбрать только короткометражные фильмы.'
      ></label>
    </fieldset>
  );
};
