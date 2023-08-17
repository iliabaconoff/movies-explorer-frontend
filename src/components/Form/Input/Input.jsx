import './Input.css';

const Input = ({
  value,
  handleChange,
  name,
  type,
  placeholder,
  checked,
  required,
  minLength,
  maxLength,
  label,
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
          defaultChecked={checked}
          required={required}
          onChange={handleChange}
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
