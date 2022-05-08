import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import './TechIcon.css';

export const TechIcon = ({ text }) => {
  return (
    <li className={'tech-icon'}>
      <Paragraph className='tech-icon__text' text={text} />
    </li>
  );
};
