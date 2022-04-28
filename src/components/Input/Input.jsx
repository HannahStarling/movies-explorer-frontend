import React from 'react';

export const Input = ({
  className = '',
  autoComplete = 'off',
  type = 'text',
  name,
  placeholder,
  required,
}) => {
  return (
    <label className={`${className}-label`}>
      <input
        autoComplete={autoComplete}
        type={type}
        className={`${className}`}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
};
