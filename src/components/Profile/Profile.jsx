import { useState } from 'react';
import './Profile.css';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';

const Profile = ({ onSubmit, setLoggedIn, loggedIn }) => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  function handleChange(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
  }

  const onSignOut = () => {
    setLoggedIn(false);
    navigate('/', { replace: true });
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main>
        <section className='profile'>
          <h1 className='profile__title'>Привет, Илья!</h1>
          <Form
            name={'profile'}
            buttonText={'Редактировать'}
            onSubmit={handleSubmit}
          >
            <ul className={`form__list form__list_type_profile`}>
              <li className={`form__item form__item_type_profile`}>
                <Input
                  value={value.name}
                  handleChange={handleChange}
                  type={'text'}
                  placeholder={'Виталий'}
                  required={true}
                  name={'name'}
                  minLength={2}
                  maxLength={30}
                />
              </li>
              <li className={`form__item form__item_type_profile`}>
                <Input
                  value={value.email}
                  handleChange={handleChange}
                  type={'email'}
                  placeholder={'pochta@yandex.ru'}
                  required={true}
                  name={'email'}
                />
              </li>
            </ul>
          </Form>
          <button
            type='button'
            className='profile__button-exit'
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </section>
      </Main>
    </>
  );
};

export default Profile;
