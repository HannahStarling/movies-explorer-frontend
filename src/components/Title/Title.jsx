import React from 'react';
import './Title.css';

export const Title = ({ title, className = '', ...props }) => {
  return (
    <h1 className={`title ${className}`.trim()} {...props}>
      {title}
    </h1>
  );
};
