import React from 'react';
import './Form.css';

export const Form = ({ children, className = '', onSubmit, name, ...props }) => {
  return (
    <form
      {...props}
      onSubmit={onSubmit}
      className={`${className} form`.trim()}
      id={name}
      name={name}
    >
      {children}
    </form>
  );
};
