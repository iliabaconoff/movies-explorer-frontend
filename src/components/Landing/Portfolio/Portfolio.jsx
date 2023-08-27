import Navigation from '../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { URL_ADAPTIVE, URL_APP, URL_STATIC } from '../../../utils/constants';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <Navigation className='portfolio__nav'>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <Link className='portfolio__link' to={URL_STATIC} target='_blank'>
              Статичный сайт
            </Link>
          </li>
          <li className='portfolio__item'>
            <Link className='portfolio__link' to={URL_ADAPTIVE} target='_blank'>
              Адаптивный сайт
            </Link>
          </li>
          <li className='portfolio__item'>
            <Link className='portfolio__link' to={URL_APP} target='_blank'>
              Одностраничное приложение
            </Link>
          </li>
        </ul>
      </Navigation>
    </section>
  );
};

export default Portfolio;
