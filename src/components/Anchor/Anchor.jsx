import React from 'react';
import './Anchor.css';

export const Anchor = ({ children, link, className = '', text, ...props }) => {
  return (
    <a href={link} className={`${className} link`.trim()} target={'_blank'} rel='noreferrer'>
      {text}
      {children}
    </a>
  );
};
