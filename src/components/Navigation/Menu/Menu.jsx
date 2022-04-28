import React from 'react';
import { ROUTES } from '../../../utils/constants';
import { List } from '../../List/List';
import { MenuLink } from '../MenuLink/MenuLink';
import './Menu.css';

export const Menu = ({ children, className = 'menu' }) => {
  return (
    <List listStyle={className}>
      {children}
      {[...ROUTES.navigation]
        .filter(({ link }) => {
          return link !== '/';
        })
        .map((link) => {
          return <MenuLink className={`${className}__link`} {...link} />;
        })}
    </List>
  );
};
