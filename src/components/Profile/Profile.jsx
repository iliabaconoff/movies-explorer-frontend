import { useContext, useEffect } from 'react';
import './Profile.css';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import useFormValid from '../hooks/useFormValid';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MAIN_PATH } from '../../utils/constants';

const Profile = ({ onSubmit, setCurrentUser, loggedIn, isSendRequest }) => {
  const {
    values,
    handleChange,
    setValues,
    setValid,
    setFormActivated,
    isFormActivated,
    isValid,
    isFormValid,
  } = useFormValid();
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  function handleInputChange(evt) {
    handleChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setFormActivated(false);
    onSubmit(values);
  }

  const handleFormActivated = () => {
    setFormActivated(true);
  };

  const onSignOut = () => {
    setCurrentUser({});
    localStorage.clear();
    navigate(MAIN_PATH, { replace: true });
  };

  useEffect(() => {
    setValues((values) => ({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    }));
    if (currentUser) {
      setValid((isValid) => ({ ...isValid, name: true, email: true }));
    }
  }, [currentUser]);
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main>
        <section className='profile'>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}`}</h1>
          <Form
            name={'profile'}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
            onActiveForm={handleFormActivated}
            isFormActivated={isFormActivated}
            disabledDafault={
              currentUser.name === values.name &&
              currentUser.email === values.email
            }
            isSendRequest={isSendRequest}
            isValid={isValid}
            isFormValid={isFormValid}
          >
            <ul className={`form__list form__list_type_profile`}>
              <li className={`form__item form__item_type_profile`}>
                <Input
                  value={values.name}
                  handleChange={handleInputChange}
                  type={'text'}
                  placeholder={'Виталий'}
                  required={true}
                  name={'name'}
                  minLength={2}
                  maxLength={30}
                  disabled={!isFormActivated}
                  label={'Имя'}
                />
              </li>
              <li className={`form__item form__item_type_profile`}>
                <Input
                  value={values.email}
                  handleChange={handleInputChange}
                  type={'email'}
                  placeholder={'pochta@yandex.ru'}
                  required={true}
                  name={'email'}
                  disabled={!isFormActivated}
                  label={'E-mail'}
                />
              </li>
            </ul>
          </Form>
          {!isFormActivated && (
            <ul className='profile__list'>
              <li className='profale__item'>
                <button
                  className='profile__button profile__button_edit'
                  onClick={handleFormActivated}
                >
                  Редактировать
                </button>
              </li>
              <li className='profale__item'>
                <button
                  className='profile__button profile__button_exit'
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          )}
        </section>
      </Main>
    </>
  );
};

export default Profile;
