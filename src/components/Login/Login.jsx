import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';

const Login = ({ onLogin }) => {
  return (
    <Main className='auth'>
      <section className='auth__section'>
        <Link className='auth__logo' to='/' />
        <h1 className='auth__title'>Рады видеть!</h1>
        <AuthForm isRegForm={false} onLogin={onLogin} />
      </section>
    </Main>
  );
};

export default Login;
