import React from 'react';
import './FilmMenu.css';

export const FilmMenu = () => {
  return (
    <ul className={'film-menu list'}>
      <li>
        <a className='film-menu__link film-menu__link_active'>Фильмы</a>
      </li>
      <li>
        <a className='film-menu__link'>Сохранённые фильмы</a>
      </li>
    </ul>
  );
};
