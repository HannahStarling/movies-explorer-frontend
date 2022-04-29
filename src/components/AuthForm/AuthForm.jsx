import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';
import './AuthForm.css';

export const AuthForm = ({
  title = 'Добро пожаловать!',
  className = '',
  isLogin = true,
  btnText,
  question,
  linkText,
  link,
}) => {
  return (
    <>
      <Title title={title} className={'auth__title'} />
      <Form className='auth__form'>
        {isLogin && (
          <Input label={'Имя'} type='text' name={'name'} placeholder={'Имя'} className={'auth'} />
        )}
        <Input
          label={'E-mail'}
          type='email'
          name={'email'}
          placeholder={'E-mail'}
          className={'auth'}
        />
        <Input
          label={'Пароль'}
          error={'Что-то пошло не так...'}
          type='password'
          name={'password'}
          placeholder={'Пароль'}
          className={'auth'}
        />
        <Button text={btnText} type={'submit'} className={'auth__btn'} />
      </Form>
      <p className={'auth__question'}>
        {question}&nbsp;
        <Link to={link} className='auth__link link'>
          {linkText}
        </Link>
      </p>
    </>
  );
};
