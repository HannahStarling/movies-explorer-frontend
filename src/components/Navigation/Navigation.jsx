import React from 'react';
import { AccountMenu } from './AccountMenu/AccountMenu';
import { AuthMenu } from './AuthMenu/AuthMenu';
import './Navigation.css';

export const Navigation = ({ loggedIn }) => {
  return (
    <>
      {loggedIn ? (
        <nav className='navigation'>
          <AccountMenu />
        </nav>
      ) : (
        <nav>
          <AuthMenu />
        </nav>
      )}
    </>
  );
};
