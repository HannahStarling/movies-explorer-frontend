import React from 'react';
import { AccountMenu } from '../Navigation/AccountMenu/AccountMenu';
import { Logo } from '../Logo/Logo';
import './Header.css';

function Header() {
  return (
    <header className={'header'}>
      <Logo />
      <AccountMenu />
    </header>
  );
}

export default Header;
