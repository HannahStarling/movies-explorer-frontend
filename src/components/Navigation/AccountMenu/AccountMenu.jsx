import React from 'react';
import { Button } from '../../../Button/Button';
import './AccountMenu.css';

export const AccountMenu = () => {
  return (
    <ul className={'account-menu list'}>
      <li>
        <a className={'account-menu__link'}>Регистрация</a>
      </li>
      <li>
        <Button className={'account-menu__btn'} text={'Войти'} />
      </li>
    </ul>
  );
};
