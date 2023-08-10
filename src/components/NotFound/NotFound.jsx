import './NotFound.css';
import Main from '../Main/Main';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ setIsErrorPage }) => {
  useEffect(() => {
    setIsErrorPage(true);
  }, [setIsErrorPage]);

  const handleClickBack = () => {
    setIsErrorPage(false);
  };

  return (
    <Main className='error'>
      <h1 className='error__title'>404</h1>
      <p className='error__subtitle'>Страница не найдена</p>
      <Link
        className='error__link'
        to='/' //исправить на путь назад
        onClick={handleClickBack}
      >
        Назад
      </Link>
    </Main>
  );
};

export default NotFound;
