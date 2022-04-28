import React from 'react';
import { Section } from '../Section/Section';
import { Title } from '../Title/Title';
import './Promo.css';

export const Promo = () => {
  return (
    <Section className='promo'>
      <Title
        className={'promo__title'}
        title={'Учебный проект студента факультета Веб-разработки.'}
      />
    </Section>
  );
};
