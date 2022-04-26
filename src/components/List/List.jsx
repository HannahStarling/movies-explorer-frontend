import React from 'react';
import './List.css';

export const List = ({ children, listStyle = '', ...props }) => {
  return (
    <ul className={`list ${listStyle}`.trim()} {...props}>
      {children}
    </ul>
  );
};
