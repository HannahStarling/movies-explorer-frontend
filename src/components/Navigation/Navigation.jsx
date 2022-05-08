import React from 'react';
import { AccountMenu } from './AccountMenu/AccountMenu';
import { AuthMenu } from './AuthMenu/AuthMenu';
import './Navigation.css';

export const Navigation = ({ location }) => {
  return (
    <>
      {location === '/' ? (
        <nav>
          <AuthMenu />
        </nav>
      ) : (
        <nav className='navigation'>
          <AccountMenu />
        </nav>
      )}
    </>
  );
};
