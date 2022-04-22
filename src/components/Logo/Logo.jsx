import React from 'react';
import logo from '../../images/logo.svg';
import './Logo.css';

const LOGO_ALT = 'Логотип сайта в виде бублика';

export const Logo = () => {
  return <img src={logo} alt={LOGO_ALT} />;
};
