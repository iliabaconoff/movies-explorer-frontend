import './AuthForm.css';
import { Link } from 'react-router-dom';
import useFormValid from '../hooks/useFormValid';
import ErrorLabel from './ErrorLabel/ErrorLabel';

const AuthForm = ({ isRegForm, onLogin, onRegister }) => {
  const { values, errors, handleChange, isFormValid, isFormActivated } =
    useFormValid();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isRegForm ? onRegister(values) : onLogin(values);
  };

  return (
    <form
      name={isRegForm ? 'registration' : 'login'}
      className='form form_type_auth'
      onSubmit={handleSubmit}
      noValidate
    >
      {isRegForm && (
        <ErrorLabel
          title='Имя'
          name='name'
          handleChange={handleChange}
          values={values}
          errors={errors}
          minLength={2}
          maxLength={30}
          placeholder='Виталий'
          type='text'
          disabled={!isFormActivated}
        />
      )}
      <ErrorLabel
        title='E-mail'
        name='email'
        handleChange={handleChange}
        values={values}
        errors={errors}
        placeholder='pochta@yandex.ru|'
        type='email'
        disabled={!isFormActivated}
      />
      <ErrorLabel
        title='Пароль'
        name='password'
        handleChange={handleChange}
        values={values}
        errors={errors}
        minLength={6}
        placeholder='••••••••••••••'
        type='password'
        disabled={!isFormActivated}
      />
      <p
        className={`form__response-error ${
          !isRegForm && 'form__response-error_type_login'
        }`}
      ></p>
      <button
        type='submit'
        className={`form__submit-button ${
          !isFormValid ? 'form__submit-button_disabled' : ''
        }`}
        disabled={!isFormValid}
      >
        {isRegForm ? 'Зарегистрироваться' : 'Войти'}
      </button>
      <p className='form__link-caption'>
        {isRegForm ? (
          <>
            Уже зарегистрированы?
            <Link to='/signin' className='form__link'>
              Войти
            </Link>
          </>
        ) : (
          <>
            Еще не зарегистрированы?
            <Link to='/signup' className='form__link'>
              Регистрация
            </Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
