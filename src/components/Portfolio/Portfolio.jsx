import React from 'react';
import { links } from '../../utils/constants';
import { Links } from '../Links/Links';
import './Portfolio.css';

export const Portfolio = () => {
  return (
    <>
      {/* block BEM */}
      <h4 className='portfolio__title'>Портфолио</h4>
      <Links linkStyle={'portfolio__work'} listStyle={'portfolio__works'} portfolio={links.portfolio} />
    </>
  );
};
