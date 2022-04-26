import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import './Copyright.css';

export const Copyright = () => {
  return <Paragraph className={'copyright'}>&copy; {new Date().getFullYear()}</Paragraph>;
};
