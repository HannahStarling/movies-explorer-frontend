import React from 'react';
import './Input.css';

export const Input = ({
  label,
  error,
  className = '',
  autoComplete = 'off',
  type = 'text',
  name,
  placeholder,
  required,
}) => {
  return (
    <label className={`${className}__input-label input-label`}>
      {label}
      <input
        autoComplete={autoComplete}
        type={type}
        className={`${className}__input input ${error ? `input_type_error` : ''}`.trim()}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <span className='input-error'>{error}</span>
    </label>
  );
};
