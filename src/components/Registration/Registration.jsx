import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';

const Register = ({ onLogin, onRegister }) => {
  return (
    <div className='auth'>
      <Link to='/' className='auth__logo'></Link>
      <h2 className='auth__title'>Добро пожаловать!</h2>
      <AuthForm isRegForm={true} onLogin={onLogin} onRegister={onRegister} />
    </div>
  );
};

export default Register;
