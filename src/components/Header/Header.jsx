import React from 'react';
import { Menu } from '../Navigation/Menu/Menu';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { MobileNavigation } from '../Navigation/MobileNavigation/MobileNavigation';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import './Header.css';

function Header({ className = '', type = 'white', location = '/' }) {
  const hasMenu = location !== '/' && location !== '/signup' && location !== '/signin';
  const isLogin = location !== '/signup' && location !== '/signin';
  return (
    <>
      <MobileNavigation location={location} />
      <header className={`header header_type_${type}`}>
        <Logo />
        {hasMenu && (
          <>
            <BurgerBtn />
            <Menu />
          </>
        )}
        {isLogin && <Navigation location={location} />}
      </header>
    </>
  );
}

export default Header;
