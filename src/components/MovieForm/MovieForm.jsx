import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { Section } from '../Section/Section';
import './MovieForm.css';

export const MovieForm = () => {
  return (
    <Section className='movie-form'>
      <SearchForm />
    </Section>
  );
};
