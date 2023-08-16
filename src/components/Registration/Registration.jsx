import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';

const Register = ({ onLogin, onRegister }) => {
  return (
    <Main className='auth'>
      <section className='auth__section'>
        <Link to='/' className='auth__logo'></Link>
        <h1 className='auth__title'>Добро пожаловать!</h1>
        <AuthForm isRegForm={true} onLogin={onLogin} onRegister={onRegister} />
      </section>
    </Main>
  );
};

export default Register;
