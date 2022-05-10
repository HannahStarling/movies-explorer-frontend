import React from 'react';
import './Form.css';

export const Form = ({ children, className = '', onSubmit, name }) => {
  return (
    <form onSubmit={onSubmit} className={`${className} form`.trim()} id={name} name={name}>
      {children}
    </form>
  );
};
