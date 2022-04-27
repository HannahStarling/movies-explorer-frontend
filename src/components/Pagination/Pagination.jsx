import React from 'react';
import { Section } from '../Section/Section';
import { Button } from '..//Button/Button';
import './Pagination.css';

export const Pagination = () => {
  return (
    <Section className={'pagination'}>
      <Button className={'pagination__btn'} text={'Ещё'} />
    </Section>
  );
};
