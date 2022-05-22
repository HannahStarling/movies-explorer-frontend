import React, { useCallback, useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { PATTERNS } from '../../utils/constants';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Paragraph } from '../Paragraph/Paragraph';
import { Preloader } from '../Preloader/Preloader';
import './AccountForm.css';

export const AccountForm = ({ onLogOut, onUpdate, isLoading, infoMessage }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const { name, email } = useContext(CurrentUserContext);
  const { values, handleChange, resetForm, errors, isValid } = useForm();

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEdited(true);
    resetForm({ name, email });
  };

  const changeUserInfo = (e) => {
    e.preventDefault();
    onUpdate(values);
    setIsEdited(false);
  };

  const validateForm = useCallback(() => {
    setNameIsValid(name !== values.name && PATTERNS.NAME.test(values.name));
    setEmailIsValid(email !== values.email && PATTERNS.EMAIL.test(values.email));
  }, [email, name, values.email, values.name]);

  useEffect(() => {
    validateForm();
    if (!isValid || !(nameIsValid || emailIsValid)) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [emailIsValid, formIsValid, isValid, nameIsValid, validateForm]);

  return (
    <Form noValidate onSubmit={changeUserInfo} name={'account'} className={'account__form'}>
      {isEdited ? (
        <>
          <Input
            value={values.name}
            onChange={handleChange}
            type='text'
            name={'name'}
            placeholder={'Имя'}
            className={'account'}
            validation={{
              minLength: 1,
              maxLength: 80,
              required: true,
            }}
            error={errors['name']}
          />
          <Input
            value={values.email}
            onChange={handleChange}
            type={'email'}
            name={'email'}
            placeholder={'E-mail'}
            className={'account'}
            validation={{
              minLength: 1,
              maxLength: 80,
              required: true,
            }}
            error={errors['email']}
          />
          <Button
            type={'submit'}
            className='account__btn'
            disabled={!formIsValid || isLoading}
            text={'Сохранить изменения'}
          />
        </>
      ) : !isLoading ? (
        <>
          <Paragraph className='account__non-input'>{name}</Paragraph>
          <Paragraph className='account__non-input'>{email}</Paragraph>
          <span className={'auth__error'}>{infoMessage}</span>
          <Button
            onClick={handleUpdate}
            type={'button'}
            className={'account__btn'}
            text={'Редактировать'}
          />
        </>
      ) : (
        <Preloader />
      )}
      <Button
        disabled={isLoading}
        onClick={onLogOut}
        type={'button'}
        className='account__btn account__btn_type_logout'
        text={'Выйти из аккаунта'}
      />
    </Form>
  );
};
