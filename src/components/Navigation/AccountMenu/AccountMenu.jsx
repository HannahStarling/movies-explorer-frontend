import React from 'react';
import { ROUTES } from '../../../utils/constants';
import { List } from '../../List/List';
import { Button } from '../../Button/Button';
import { AccountLink } from '../AccountLink/AccountLink';
import './AccountMenu.css';
import { useNavigate } from 'react-router-dom';

export const AccountMenu = ({ className = 'account-menu' }) => {
  const navigate = useNavigate();

  const toAccount = () => {
    navigate('/profile');
  };

  return (
    <List listStyle={className}>
      {[...ROUTES.account].map((link) => {
        return <AccountLink key={link.id} className={`${className}_link`} {...link} />;
      })}
      <Button onClick={toAccount} className={`${className}__icon`} />
    </List>
  );
};
