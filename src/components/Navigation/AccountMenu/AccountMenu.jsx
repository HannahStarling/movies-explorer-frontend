import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Button/Button';
import './AccountMenu.css';

export const AccountMenu = () => {
  return (
    <ul className={'account-menu list'}>
      <li>
        <Link to={'/sign-up'} className={'account-menu__link link'}>
          Регистрация
        </Link>
      </li>
      <li>
        <Link to={'/sign-in'} className={'link'}>
          <Button className={'account-menu__btn'} text={'Войти'} />
        </Link>
      </li>
    </ul>
  );
};
