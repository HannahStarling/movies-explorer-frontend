import React from 'react';
import { Socials } from '../Socials/Socials';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className={'footer'}>
      <p className={'footer__description'}>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
      <nav className='footer__nav'>
        <p className={'footer__coopyright'}>&copy; {new Date().getFullYear()}</p>
        <Socials />
      </nav>
    </footer>
  );
};
