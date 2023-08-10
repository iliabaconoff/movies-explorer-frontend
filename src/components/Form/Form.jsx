import React, { useRef} from 'react';
import './Form.css';

export default function Form({ children, name, onSubmit, buttonText }) {
  const formRef = useRef(0);

  return (
    <form
      className={`form form_type_${name}`}
      name={name}
      noValidate
      onSubmit={onSubmit}
      ref={formRef}
    >
      {children}
      <button
        className={`form__button-save form__button-save_type_${name}`}
        type='submit'
      >
        {buttonText}
      </button>
    </form>
  );
}
