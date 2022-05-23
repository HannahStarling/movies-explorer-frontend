import React from 'react';
import { Section } from '../Section/Section';
import { Button } from '..//Button/Button';
import './Pagination.css';

export const Pagination = ({ onButtonClick }) => {
  return (
    <Section className={'pagination'}>
      <Button onClick={onButtonClick} className={'pagination__btn'} text={'Ещё'} />
    </Section>
  );
};
