import { useState, useCallback } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues ?? {});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, validationMessage } = e.target;
    const values = type === 'checkbox' ? checked : value;

    setValues((prevValues) => {
      if (name === 'movie-search' && !values.trim().length) {
        setErrors((prevErrors) => {
          return {
            ...prevErrors,
            [name]: 'Необходимо ввести ключевое слово',
          };
        });
      }
      return {
        ...prevValues,
        [name]: values,
      };
    });

    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [name]: validationMessage,
      };
    });

    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (resetValues = {}, resetErrors = {}, resetIsValid = false) => {
      setValues(resetValues);
      setErrors(resetErrors);
      setIsValid(resetIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
};

export default useForm;
