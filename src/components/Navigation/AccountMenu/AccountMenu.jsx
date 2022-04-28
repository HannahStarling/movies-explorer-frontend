import React from 'react';
import { ROUTES } from '../../../utils/constants';
import { List } from '../../List/List';
import { Button } from '../../Button/Button';
import { AccountLink } from '../AccountLink/AccountLink';
import './AccountMenu.css';

export const AccountMenu = ({ className = 'account-menu' }) => {
  return (
    <List listStyle={className}>
      {[...ROUTES.account].map((link) => {
        return <AccountLink className={`${className}_link`} {...link} />;
      })}
      <Button className={`${className}__icon`} />
    </List>
  );
};
