import { useState, useCallback, useEffect } from 'react';
import {
  MESSAGE_TEXT,
  PROFILE_PATH,
  REGX_EMAIL,
  REGX_NAME,
} from '../../utils/constants';
import { useLocation } from 'react-router-dom';

const useFormValid = (
  initialValues = {},
  initialErrors = {},
  initialValid = false
) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialValid);
  const [isFormValid, setFormValid] = useState(false);
  const [isFormActivated, setFormActivated] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    resetForm();
  }, [pathname]);

  useEffect(() => {
    if (pathname === PROFILE_PATH) {
      setFormActivated(false);
    }
  }, [pathname]);

  const handleChange = (evt) => {
    const { name, value, type } = evt.target;
    const { valid } = evt.target.validity;
    console.log(values);

    if (name === 'email' && !REGX_EMAIL.test(value)) {
      setValid((isValid) => ({ ...isValid, [name]: false }));
      setErrors((errors) => ({ ...errors, [name]: MESSAGE_TEXT.noEmail }));
    } else if (name === 'name' && !REGX_NAME.test(value)) {
      setValid((isValid) => ({ ...isValid, [name]: false }));
      setErrors((errors) => ({ ...errors, name: MESSAGE_TEXT.noName }));
    } else if (type === 'checkbox') {
      setValid((isValid) => ({ ...isValid }));
    } else {
      setErrors({ ...errors, [name]: evt.target.validationMessage });
      setValid((isValid) => ({ ...isValid, [name]: valid }));
    }
    setValues({ ...values, [name]: value });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setValid(newIsValid);
    },
    [setValues, setErrors, setValid]
  );

  useEffect(() => {
    if (!Object.values(isValid).includes(false)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [isValid]);

  return {
    values,
    errors,
    isValid,
    handleChange,
    isFormValid,
    resetForm,
    setValues,
    setValid,
    isFormActivated,
    setFormActivated,
  };
};

export default useFormValid;
