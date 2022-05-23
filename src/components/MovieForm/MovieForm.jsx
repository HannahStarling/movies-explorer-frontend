import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { Section } from '../Section/Section';
import './MovieForm.css';

export const MovieForm = ({ name, onSubmit, isLoading, onCheck }) => {
  return (
    <Section className='movie-form'>
      <SearchForm onCheck={onCheck} isLoading={isLoading} name={name} onSubmit={onSubmit} />
    </Section>
  );
};
