import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';
import './AuthForm.css';

export const AuthForm = ({
  onAuth,
  title = 'Добро пожаловать!',
  className = '',
  isLogin = true,
  btnText,
  question,
  linkText,
  link,
  btnType,
}) => {
  const { values, handleChange, resetForm } = useForm();

  const handleRegistration = (e) => {
    e.preventDefault();
    onAuth(values);
    resetForm();
  };

  return (
    <>
      <Title title={title} className={'auth__title'} />
      <Form onSubmit={handleRegistration} className='auth__form'>
        {isLogin && (
          <Input
            value={values.name}
            onChange={handleChange}
            label={'Имя'}
            type='text'
            name={'name'}
            placeholder={'Имя'}
            className={'auth'}
          />
        )}
        <Input
          value={values.email}
          onChange={handleChange}
          label={'E-mail'}
          type='email'
          name={'email'}
          placeholder={'E-mail'}
          className={'auth'}
        />
        <Input
          value={values.password}
          onChange={handleChange}
          label={'Пароль'}
          error={'Что-то пошло не так...'}
          type='password'
          name={'password'}
          placeholder={'Пароль'}
          className={'auth'}
        />
        <Button
          text={btnText}
          type={'submit'}
          className={`auth__btn ${btnType ? `auth__btn_type_${btnType}` : ''}`.trim()}
        />
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
