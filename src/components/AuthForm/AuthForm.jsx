import React, { useCallback, useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';
import { Preloader } from '../Preloader/Preloader';
import { PATTERNS } from '../../utils/validation/constants';
import './AuthForm.css';

export const AuthForm = ({
  onAuth,
  title = 'Добро пожаловать!',
  isLogin = true,
  btnText,
  question,
  linkText,
  link,
  btnType,
  isLoading,
  errorText,
}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const { NAME, EMAIL, PASSWORD } = PATTERNS;

  const { values, handleChange, resetForm, errors, isValid } = useForm();

  const handleRegistration = (e) => {
    e.preventDefault();
    onAuth(values);
    resetForm();
  };

  const validateForm = useCallback(() => {
    setNameIsValid(NAME.test(values.name));
    setEmailIsValid(EMAIL.test(values.email));
    setPasswordIsValid(PASSWORD.test(values.password));
  }, [EMAIL, NAME, PASSWORD, values.email, values.name, values.password]);

  useEffect(() => {
    validateForm();
    if (!isValid || !(nameIsValid && emailIsValid && passwordIsValid)) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [emailIsValid, formIsValid, isValid, nameIsValid, passwordIsValid, validateForm]);

  return (
    <>
      <Title title={title} className={'auth__title'} />
      <Form noValidate onSubmit={handleRegistration} className='auth__form'>
        <>
          {isLogin && (
            <Input
              value={values.name}
              onChange={handleChange}
              label={'Имя'}
              type='text'
              name={'name'}
              placeholder={'Имя'}
              className={'auth'}
              validation={{
                minLength: 1,
                maxLength: 80,
                required: true,
              }}
              error={errors.name}
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
            validation={{
              minLength: 3,
              maxLength: 80,
              required: true,
            }}
            error={errors.email}
          />
          <Input
            value={values.password}
            onChange={handleChange}
            label={'Пароль'}
            type='password'
            name={'password'}
            placeholder={'Пароль'}
            className={'auth'}
            validation={{
              minLength: 6,
              maxLength: 30,
              required: true,
            }}
            error={errors.password}
          />
        </>
        {isLoading && <Preloader />}
        {!isLoading && (
          <span className={'auth__error'}>
            {errorText || (!formIsValid && 'Необходимо ввести корректные данные')}
          </span>
        )}
        <Button
          disabled={!formIsValid || isLoading}
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
