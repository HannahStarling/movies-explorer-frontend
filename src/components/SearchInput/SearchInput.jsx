import React from 'react';
import { Button } from '../Button/Button';
import './SearchInput.css';

export const SearchInput = ({ disabled, placeholder = 'Фильм', query = '', onSearch, error }) => {
  return (
    <>
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
        <span className='input-error search-error' aria-live='polite'>
          {error}
        </span>
        <Button disabled={disabled} className={'movie-search__btn'} />
      </fieldset>
    </>
  );
};
