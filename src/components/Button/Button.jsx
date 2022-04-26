import React from 'react';

export const Button = ({ text, className, ...props }) => {
  return (
    <button className={`${className} button `} {...props}>
      {text}
    </button>
  );
};
