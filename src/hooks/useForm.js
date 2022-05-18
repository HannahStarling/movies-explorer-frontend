import { useState, useCallback } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, validationMessage } = e.target;
    const values = type === 'checkbox' ? checked : value;

    setValues((prevValues) => {
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
