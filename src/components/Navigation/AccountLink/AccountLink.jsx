import React from 'react';
import { Link } from 'react-router-dom';
import './AccountLink.css';

export const AccountLink = ({
  className = '',
  link,
  title,
  isButton = false,
}) => {
  const classList = `${className} ${isButton ? `${className}_btn` : ''}`;

  return (
    <li>
      <Link to={link} className={`${classList} link`}>
        {title}
      </Link>
    </li>
  );
};
