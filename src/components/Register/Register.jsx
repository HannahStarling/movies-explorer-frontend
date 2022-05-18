import React from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import { Header } from '../Header/Header';
import { Section } from '../Section/Section';
import './Register.css';

export const Register = ({ onAuth, errorText, isLoading }) => {
  return (
    <>
      <Header type='small' location='/signup' />
      <main>
        <Section className='auth'>
          <AuthForm
            isLoading={isLoading}
            errorText={errorText}
            onAuth={onAuth}
            btnText={'Зарегистрироваться'}
            question={'Уже зарегистрированы?'}
            link={'/signin'}
            linkText={'Войти'}
          />
        </Section>
      </main>
    </>
  );
};
