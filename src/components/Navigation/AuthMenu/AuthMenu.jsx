import React from 'react';
import { ROUTES } from '../../../utils/constants';
import { List } from '../../List/List';
import { AccountLink } from '../AccountLink/AccountLink';
import './AuthMenu.css';

export const AuthMenu = () => {
  return (
    <List listStyle={'auth-menu'}>
      {[...ROUTES.auth].map((link) => {
        return <AccountLink className={'auth-menu__link'} {...link} />;
      })}
    </List>
  );
};
