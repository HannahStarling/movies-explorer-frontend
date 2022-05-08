import React from 'react';
import './Paragraph.css';

export const Paragraph = ({ className = '', text, children, ...props }) => {
  return (
    <p className={`${className} paragraph`.trim()} {...props}>
      {children} {text}
    </p>
  );
};
