import React, { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { AccountForm } from '../AccountForm/AccountForm';
import { Header } from '../Header/Header';
import { Section } from '../Section/Section';
import { Title } from '../Title/Title';
import './Account.css';

export const Account = ({ loggedIn, onLogOut, onUpdate, isLoading, infoMessage }) => {
  const { name } = useContext(CurrentUserContext);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Section className='account'>
          <Title title={`Привет, ${name}!`} className={'account__title'} />
          <AccountForm
            infoMessage={infoMessage}
            isLoading={isLoading}
            onUpdate={onUpdate}
            onLogOut={onLogOut}
          />
        </Section>
      </main>
    </>
  );
};
