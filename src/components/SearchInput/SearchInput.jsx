import React from 'react';
import { Button } from '../Button/Button';
import './SearchInput.css';

export const SearchInput = ({ placeholder = 'Фильм', query = '', onSearch }) => {
  return (
    <fieldset className={'movie-search'}>
      <label htmlFor={'movie-search'} />
      <input
        value={query}
        onChange={onSearch}
        type={'search'}
        name={'movie-search'}
        id={'movie-search'}
        className={'movie-search__input'}
        placeholder={placeholder}
        aria-label={'Поле для ввода критериев поиска.'}
        required
      />
      <Button className={'movie-search__btn'} />
    </fieldset>
  );
};
