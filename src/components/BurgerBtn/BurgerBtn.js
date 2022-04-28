import React from 'react';
import { Button } from '../Button/Button';
import './BurgerBtn.css';

export const BurgerBtn = ({ isActive }) => {
  return (
    <Button
      className={`dropdown-menu-btn ${
        isActive ? 'dropdown-menu-btn_active' : ''
      }`.trim()}
    >
      <span
        className={`dropdown-menu-btn__element ${
          isActive ? 'dropdown-menu-btn__element_active' : ''
        }`.trim()}
      ></span>
    </Button>
  );
};
