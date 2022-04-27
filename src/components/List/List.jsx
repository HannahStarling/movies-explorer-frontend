import React from 'react';
import './List.css';

export const List = ({ children, listStyle = '', ...props }) => {
  return (
    <ul className={`${listStyle} list`.trim()} {...props}>
      {children}
    </ul>
  );
};
