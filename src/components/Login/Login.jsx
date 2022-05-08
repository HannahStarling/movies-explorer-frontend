import React from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import Header from '../Header/Header';
import { Section } from '../Section/Section';
import './Login.css';

export const Login = () => {
  return (
    <>
      <Header type='small' location='/signup' />
      <main>
        <Section className='auth'>
          <AuthForm
            isLogin={false}
            title={'Рады видеть!'}
            btnText={'Войти'}
            btnType={'login'}
            question={'Ещё не зарегистрированы?'}
            link={'/signup'}
            linkText={'Регистрация'}
          />
        </Section>
      </main>
    </>
  );
};
