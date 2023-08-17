import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import './NavTab.css';

const NavTab = () => {
  return (
    <Navigation>
      <ul className='promo__list'>
        <li className='promo__item'>
          <Link className='promo__link' to='#about' reloadDocument>
            О проекте
          </Link>
        </li>
        <li className='promo__item'>
          <Link className='promo__link' to='#techs' reloadDocument>
            Технологии
          </Link>
        </li>
        <li className='promo__item'>
          <Link className='promo__link' to='#about-me' reloadDocument>
            Студент
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default NavTab;
