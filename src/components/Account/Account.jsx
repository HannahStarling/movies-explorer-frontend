import React from 'react';
import { AccountForm } from '../AccountForm/AccountForm';
import Header from '../Header/Header';
import { Section } from '../Section/Section';
import { Title } from '../Title/Title';
import './Account.css';

export const Account = () => {
  return (
    <>
      <Header location='/profile' />
      <main>
        <Section className='account'>
          <Title title={'Привет, Виталий!'} className={'account__title'} />
          <AccountForm />
        </Section>
      </main>
    </>
  );
};
