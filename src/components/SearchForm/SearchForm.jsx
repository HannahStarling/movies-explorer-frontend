import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { CheckBox } from '../CheckBox/CheckBox';
import { Form } from '../Form/Form';
import { SearchInput } from '../SearchInput/SearchInput';
import { useLocation } from 'react-router-dom';
import { MOVIES_ROUTE } from '../../utils/constants';
import './SearchForm.css';

export const SearchForm = ({ name, onSubmit, isLoading, onCheck }) => {
  const { pathname } = useLocation();

  const prevQuery =
    pathname === MOVIES_ROUTE
      ? JSON.parse(localStorage.getItem('moviesQuery'))
      : JSON.parse(localStorage.getItem('moviesIsChecked'));

  const prevChecked =
    pathname === MOVIES_ROUTE
      ? JSON.parse(localStorage.getItem('moviesIsChecked'))
      : JSON.parse(localStorage.getItem('savedMoviesIsChecked'));

  const { values, handleChange, resetForm, errors } = useForm({
    [`${name}-search`]: prevQuery || '',
    [`${name}-filter`]: prevChecked || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    resetForm({ 'movie-search': '', 'movie-filter': values[`${name}-filter`] });
  };

  useEffect(() => {
    onCheck(values[`${name}-filter`]);
    if (pathname === MOVIES_ROUTE) {
      localStorage.setItem('moviesIsChecked', JSON.stringify(!!values[`${name}-filter`]));
    } else {
      localStorage.setItem('savedMoviesIsChecked', JSON.stringify(!!values[`${name}-filter`]));
    }
  }, [name, onCheck, pathname, values]);

  const isDisabled =
    typeof errors[`${name}-search`] !== 'undefined' && errors[`${name}-search`].length;

  return (
    <Form name={'movie-search'} onSubmit={handleSubmit} className='form_type_search'>
      <SearchInput
        disabled={isDisabled || isLoading}
        error={errors[`${name}-search`]}
        onSearch={handleChange}
        query={values[`${name}-search`]}
      />
      <CheckBox onCheck={handleChange} checked={values[`${name}-filter`]} />
    </Form>
  );
};
