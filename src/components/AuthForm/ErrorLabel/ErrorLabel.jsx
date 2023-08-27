import React from 'react';
import './ErrorLabel.css';

const Label = ({
  title,
  name,
  values,
  handleChange,
  errors,
  minLength,
  maxLength,
  placeholder,
  type,
  disabled,
}) => {
  return (
    <label className='error-label'>
      <span className='error-label__input-name'>{title}</span>
      <input
        type={type}
        name={name}
        minLength={minLength || null}
        maxLength={maxLength || null}
        placeholder={placeholder || null}
        className='error-label__input'
        value={values[`${name}`] ?? ''}
        autoComplete='on'
        onChange={handleChange}
        required
      />
      <span className='error-label__span-error'>{errors[`${name}`]}</span>
    </label>
  );
};

export default Label;
