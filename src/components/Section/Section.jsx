import React from 'react';
import './Section.css';

export const Section = ({ children, type, className = '', ...props }) => {
  const classList = `section ${type ? `section_type_${type}` : ''}`.trim();
  return <section className={`${classList} ${className}`.trim()}>{children}</section>;
};
