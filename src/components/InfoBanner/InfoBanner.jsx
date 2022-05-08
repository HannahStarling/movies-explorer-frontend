import React from 'react';
import './InfoBanner.css';

export const InfoBanner = ({ info, children, className = '' }) => {
  return (
    <>
      <h2 className={`${className} info-banner`.trim()}>{info}</h2>
      {children}
    </>
  );
};
