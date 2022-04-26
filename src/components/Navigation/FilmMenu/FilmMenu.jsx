import React from 'react';
import { Link } from 'react-router-dom';
import { List } from '../../List/List';

import './FilmMenu.css';

export const FilmMenu = () => {
  return (
    <List listStyle={'film-menu'}>
      <li>
        <Link to={'/movies'} className={'film-menu__link link film-menu__link_active'}>
          Фильмы
        </Link>
      </li>
      <li>
        <Link to={'/saved-movies'} className={'film-menu__link link'}>
          Сохранённые фильмы
        </Link>
      </li>
    </List>
  );
};
