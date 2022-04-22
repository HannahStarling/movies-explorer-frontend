import React from 'react';

export const Button = ({ text, className, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {text}
    </button>
  );
};
