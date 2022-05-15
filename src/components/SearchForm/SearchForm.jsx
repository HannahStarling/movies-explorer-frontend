import React from 'react';
import { CheckBox } from '../CheckBox/CheckBox';
import { Form } from '../Form/Form';
import { SearchInput } from '../SearchInput/SearchInput';
import useForm from '../../hooks/useForm';
import './SearchForm.css';

export const SearchForm = ({ name, onSubmit }) => {
  const { values, handleChange, resetForm } = useForm();
  const query = values[`${name}-search`];
  const checked = values[`${name}-filter`];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    resetForm({ 'movie-search': '', 'movie-filter': values[`${name}-filter`] });
  };

  return (
    <Form name={'movie-search'} onSubmit={handleSubmit} className='form_type_search'>
      <SearchInput onSearch={handleChange} query={query} />
      <CheckBox onCheck={handleChange} checked={checked} />
    </Form>
  );
};
