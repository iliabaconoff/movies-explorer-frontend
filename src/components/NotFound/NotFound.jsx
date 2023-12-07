import './NotFound.css';
import Main from '../Main/Main';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Main className='error'>
      <section>
        <h1 className='error__title'>404</h1>
        <p className='error__subtitle'>Страница не найдена</p>
        <Link className='error__link' to={-1} >
          Назад
        </Link>
      </section>
    </Main>
  );
};

export default NotFound;
