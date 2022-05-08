import React from 'react';
import './Button.css';

export const Button = ({ children, text, className = '', ...props }) => {
  return (
    <button {...props} className={`${className} button`.trim()}>
      {text}
      {children}
    </button>
  );
};
