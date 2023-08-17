import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Footer = () => {
  const { pathname } = useLocation();
  const pathProfile = pathname === '/profile';

  return (
    <footer className={`footer ${pathProfile ? 'footer_profile' : ''}`}>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__copyright-wrapper'>
        <Navigation>
          <ul className='footer__links'>
            <li className='footer__link-element'>
              <Link
                className='footer__link'
                to='https://practicum.yandex.ru/web/'
                target='_blank'
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className='footer__link-element'>
              <Link
                className='footer__link'
                to='https://github.com/iliabaconoff/movies-explorer-frontend'
                target='_blank'
              >
                Github
              </Link>
            </li>
          </ul>
        </Navigation>
        
        <p className='footer__copyright'>&copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
