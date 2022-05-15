import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useForm from '../../hooks/useForm';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Paragraph } from '../Paragraph/Paragraph';
import './AccountForm.css';

export const AccountForm = ({ onLogOut, onUpdate }) => {
  const [isEdited, setIsEdited] = useState(false);

  const { name, email } = useContext(CurrentUserContext);
  const { values, handleChange, resetForm } = useForm();

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

  return (
    <Form onSubmit={changeUserInfo} name={'account'} className={'account__form'}>
      {isEdited ? (
        <>
          <Input
            value={values.name}
            onChange={handleChange}
            type='text'
            name={'name'}
            placeholder={'Имя'}
            className={'account'}
          />
          <Input
            value={values.email}
            onChange={handleChange}
            type='email'
            name={'email'}
            placeholder={'E-mail'}
            className={'account'}
          />
          <Button type={'submit'} className='account__btn' text={'Завершить редактирование'} />
        </>
      ) : (
        <>
          <Paragraph className='account__non-input'>{name}</Paragraph>
          <Paragraph className='account__non-input'>{email}</Paragraph>
          <Button
            onClick={handleUpdate}
            type={'button'}
            className={'account__btn'}
            text={'Редактировать'}
          />
        </>
      )}
      <Button
        onClick={onLogOut}
        type={'button'}
        className='account__btn account__btn_type_logout'
        text={'Выйти из аккаунта'}
      />
    </Form>
  );
};
