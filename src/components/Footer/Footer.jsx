import React from 'react';
import { links } from '../../utils/constants';
import { Copyright } from '../Copyright/Copyright';
import { Links } from '../Links/Links';
import { Paragraph } from '../Paragraph/Paragraph';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className={'footer'}>
      <Paragraph className={'footer__description'} text='Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.' />
      <nav className='footer__nav'>
        <Copyright />
        <Links listStyle={'footer__links'} socials={links.socials} sites={links.sites} />
      </nav>
    </footer>
  );
};
