import React, { useState } from 'react';
import { Menu } from '../Navigation/Menu/Menu';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { MobileNavigation } from '../Navigation/MobileNavigation/MobileNavigation';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import './Header.css';

function Header({ className = '', type = 'white', location = '/' }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasMenu = location !== '/' && location !== '/signup' && location !== '/signin';
  const isLogin = location !== '/signup' && location !== '/signin';

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNavigation location={location} isOpen={isOpen} onClose={handleOpenMenu} />
      <header className={`header header_type_${type}`}>
        <Logo />
        {hasMenu && (
          <>
            <BurgerBtn onDropdown={handleOpenMenu} isActive={isOpen} />
            <Menu />
          </>
        )}
        {isLogin && <Navigation location={location} />}
      </header>
    </>
  );
}

export default Header;
