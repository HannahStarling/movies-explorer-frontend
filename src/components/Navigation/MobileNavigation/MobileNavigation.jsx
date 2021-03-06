import React from 'react';
import { ROUTES } from '../../../utils/constants';
import { Button } from '../../Button/Button';
import { AccountMenu } from '../AccountMenu/AccountMenu';
import { Menu } from '../Menu/Menu';
import { MenuLink } from '../MenuLink/MenuLink';
import './MobileNavigation.css';

export const MobileNavigation = ({ isOpen, onClose }) => {
  return (
    <aside className={`dropdown-menu ${isOpen ? 'dropdown-menu_opened' : ''}`.trim()}>
      <Button className='mobile-navigation_btn' onClick={onClose} />
      <nav className={`mobile-navigation ${isOpen ? 'mobile-navigation_opened' : ''}`.trim()}>
        <Menu className='menu-mobile'>
          {[...ROUTES.navigation]
            .filter(({ link }) => {
              return link === '/';
            })
            .map((link) => {
              return <MenuLink key={link.id} className={`menu-mobile__link`} {...link} />;
            })}
        </Menu>
        <AccountMenu className={'account-menu-mobile'} />
      </nav>
    </aside>
  );
};
