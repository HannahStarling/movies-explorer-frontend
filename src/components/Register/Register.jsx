import React from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import Header from '../Header/Header';
import { Section } from '../Section/Section';
import './Register.css';

export const Register = () => {
  return (
    <>
      <Header type='small' location='/signup' />
      <main>
        <Section className='auth'>
          <AuthForm
            btnText={'Зарегистрироваться'}
            question={'Уже зарегистрированы?'}
            link={'sign-in'}
            linkText={'Войти'}
          />
        </Section>
      </main>
    </>
  );
};
