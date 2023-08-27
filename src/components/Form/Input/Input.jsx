import './Input.css';

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
}) => {
  const classInput = `form__input form__input_type_${name}`;

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
    </label>
  );
};

export default Input;
