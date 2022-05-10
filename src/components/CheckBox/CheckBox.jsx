import React from 'react';
import './CheckBox.css';

export const CheckBox = ({ onCheck, checked = '', spanText = 'Короткометражки' }) => {
  return (
    <fieldset className={'movie-filter'}>
      <span className='movie-filter__label'>{spanText}</span>
      <input
        type={'checkbox'}
        className='movie-filter__input'
        id={'movie-filter'}
        name={'movie-filter'}
        onChange={onCheck}
        value={checked}
        checked={checked}
      />
      <label
        htmlFor='movie-filter'
        className='movie-filter__checkbox'
        aria-label='Выбрать только короткометражные фильмы.'
      />
    </fieldset>
  );
};
