import React from 'react';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import './AccountForm.css';

export const AccountForm = () => {
  return (
    <Form name={'account'} className={'account__form'}>
      <Input type='text' name={'name'} placeholder={'Имя'} className={'account'} />
      <Input type='email' name={'email'} placeholder={'E-mail'} className={'account'} />
      <Button type={'submit'} className='account__btn' text={'Редактировать'} />
      <Button
        type={'button'}
        className='account__btn account__btn_type_logout'
        text={'Выйти из аккаунта'}
      />
    </Form>
  );
};
