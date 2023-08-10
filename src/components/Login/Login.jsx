import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';

const Login = ({ onLogin, onRegister }) => {
  return (
    <div className='auth'>
      <Link className='auth__logo' />
      <h2 className='auth__title'>Рады видеть!</h2>
      <AuthForm isRegForm={false} onLogin={onLogin} onRegister={onRegister} />
    </div>
  );
};

export default Login;
