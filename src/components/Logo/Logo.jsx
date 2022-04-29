import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Logo.css';

const LOGO_ALT = 'Логотип сайта в виде бублика';

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} alt={LOGO_ALT} />
    </Link>
  );
};
