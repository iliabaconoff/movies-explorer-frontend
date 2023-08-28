import { useLocation } from 'react-router-dom';
import './Input.css';
import { MOVIES_PATH, SAVED_MOVIES_PATH } from '../../../utils/constants';

const Input = ({
  value,
  handleChange,
  name,
  type,
  placeholder,
  isChecked,
  required,
  minLength,
  maxLength,
  label,
  disabled,
  errors,
  form
}) => {
  const classInput = `form__input form__input_type_${name}`;
  const {pathname} = useLocation();

  let inputType;
  switch (type) {
    case 'checkbox':
      inputType = (
        <input
          className={classInput}
          type={type}
          name={name}
          checked={isChecked}
          required={required}
          onChange={handleChange}
          disabled={disabled}
        />
      );
      break;
    case 'search':
      inputType = (
        <input
          className={classInput}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value ?? ''}
          onChange={handleChange}
          autoComplete='on'
          disabled={disabled}
        />
      );
      break;
    default:
      inputType = (
        <input
          className={classInput}
          type={type}
          name={name}
          placeholder={placeholder}
          minLength={minLength || null}
          maxLength={maxLength || null}
          required={required}
          value={value ?? ''}
          onChange={handleChange}
          autoComplete='on'
          disabled={disabled}
        />
      );
      break;
  }

  return (
    <label className={`form__label form__label_type_${name}`}>
      {(type === 'checkbox' || type !== 'search') &&
        (label ? label : placeholder)}
      {inputType}
      {!(
        pathname === MOVIES_PATH || pathname === SAVED_MOVIES_PATH
      ) && (
        <span className={`form__error form__error_${form} ${name}-error`}>
          {errors[name]}
        </span>
      )}
    </label>
  );
};

export default Input;
