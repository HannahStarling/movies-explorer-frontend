import React from 'react';
import { CheckBox } from '../CheckBox/CheckBox';
import { Form } from '../Form/Form';
import { SearchInput } from '../SearchInput/SearchInput';
import './SearchForm.css';

export const SearchForm = () => {
  return (
    <Form className='form_type_search'>
      <SearchInput />
      <CheckBox />
    </Form>
  );
};
