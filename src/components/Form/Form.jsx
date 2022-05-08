import React from 'react';
import './Form.css';

export const Form = ({ children, className = '' }) => {
  return <form className={`${className} form`.trim()}>{children}</form>;
};
