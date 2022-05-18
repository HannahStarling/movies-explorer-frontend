import React, { useState } from 'react';
import { Menu } from '../Navigation/Menu/Menu';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { MobileNavigation } from '../Navigation/MobileNavigation/MobileNavigation';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import './Header.css';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

export function Header({ loggedIn, type = 'white' }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const [signup, signin] = ROUTES.auth;
  const hasNavigation = pathname !== signup.link && pathname !== signin.link;
  const hasMenu = loggedIn && hasNavigation;

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNavigation isOpen={isOpen} onClose={handleOpenMenu} />
      <header className={`header header_type_${type}`}>
        <Logo />
        {hasMenu && (
          <>
            <BurgerBtn onDropdown={handleOpenMenu} isActive={isOpen} />
            <Menu />
          </>
        )}
        {hasNavigation && <Navigation loggedIn={loggedIn} />}
      </header>
    </>
  );
}
