import React from 'react';
import { Button } from '../Button/Button';
import './SearchInput.css';

export const SearchInput = ({ placeholder = 'Фильм' }) => {
  return (
    <fieldset className={'movie-search'}>
      <label htmlFor={'movie-search'} />
      <input
        type={'search'}
        className={'movie-search__input'}
        placeholder={placeholder}
        name={'movie-search'}
        id={'movie-search'}
        required
      />
      <Button className={'movie-search__btn'} />
    </fieldset>
  );
};
