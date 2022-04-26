import React from 'react';
import { Link } from 'react-router-dom';
import { List } from '../../List/List';
import './AccountMenu.css';

export const AccountMenu = () => {
  return (
    <List listStyle={'account-menu'}>
      <li>
        <Link to={'/sign-up'} className={'account-menu__link link'}>
          Регистрация
        </Link>
      </li>
      <li>
        <Link to={'/sign-in'} className={'account-menu__btn'}>
          Войти
        </Link>
      </li>
    </List>
  );
};
