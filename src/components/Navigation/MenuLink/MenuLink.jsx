import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLink.css';

export const MenuLink = ({ className, link, title }) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `${isActive ? `${className}_active` : ''} ${className} link`.trim()
        }
      >
        {title}
      </NavLink>
    </li>
  );
};
