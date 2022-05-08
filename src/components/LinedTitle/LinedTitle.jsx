import React from 'react';
import './LinedTitle.css';

export const LinedTitle = ({ title, className = '', ...props }) => {
  return <h2 className={`title-lined ${className}`.trim()}>{title}</h2>;
};
