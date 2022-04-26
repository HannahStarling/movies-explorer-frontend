import React from 'react';
import './BlockTitle.css';

export const BlockTitle = ({ title, className = '', ...props }) => {
  return (
    <h3 className={`${className} block-title`.trim()} {...props}>
      {title}
    </h3>
  );
};
