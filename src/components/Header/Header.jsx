import React from 'react';
import { AccountMenu } from '../Navigation/AccountMenu/AccountMenu';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import './Header.css';

const header = 'header';

function Header(props) {
  return (
    <header className={header}>
      <Logo />
      <Navigation />
      <AccountMenu />
    </header>
  );
}

export default Header;
