import React from 'react';
import { AccountMenu } from '../Navigation/AccountMenu/AccountMenu';
import { Logo } from '../Logo/Logo';
import './Header.css';

function Header({ type = 'white' }) {
  return (
    <header className={`header header_type_${type}`}>
      <Logo />
      <AccountMenu />
    </header>
  );
}

export default Header;
