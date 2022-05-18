import React from 'react';
import './Input.css';

export const Input = ({
  ariaLabel,
  validation,
  value = '',
  onChange,
  label,
  error,
  className = '',
  autoComplete = 'off',
  type = 'text',
  name,
  placeholder,
}) => {
  const { minLength, maxLength, required } = validation;

  return (
    <label className={`${className}__input-label input-label`}>
      {label}
      <input
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        type={type}
        className={`${className}__input input ${error ? `input_type_error` : ''}`.trim()}
        id={name}
        name={name}
        placeholder={placeholder}
        aria-label={ariaLabel}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
      <span className='input-error' aria-live='polite'>
        {error}
      </span>
    </label>
  );
};
