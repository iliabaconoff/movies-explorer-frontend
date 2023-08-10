import Navigation from '../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <Navigation className='portfolio__nav'>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <Link
              className='portfolio__link'
              to='https://iliabaconoff.github.io/how_to_study/'
              target='_blank'
            >
              Статичный сайт
            </Link>
          </li>
          <li className='portfolio__item'>
            <Link
              className='portfolio__link'
              to='https://iliabaconoff.github.io/russian-travel/'
              target='_blank'
            >
              Адаптивный сайт
            </Link>
          </li>
          <li className='portfolio__item'>
            <Link
              className='portfolio__link'
              to='https://baconoff.nomoredomains.work'
              target='_blank'
            >
              Одностраничное приложение
            </Link>
          </li>
        </ul>
      </Navigation>
    </section>
  );
};

export default Portfolio;
