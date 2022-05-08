import React from 'react';
import { Link } from 'react-router-dom';
import { Paragraph } from '../Paragraph/Paragraph';
import { Title } from '../Title/Title';
import './NotFound.css';

export const NotFound = () => {
  return (
    <>
      <main className='not-found'>
        <div className='not-found__error'>
          <Title title={'404'} className={'not-found__status'} />
          <Paragraph text={'Страница не найдена'} className={'not-found__message'} />
        </div>
        <Link className='not-found__link link' to='/'>
          Назад
        </Link>
      </main>
    </>
  );
};
