import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { pathname } = useLocation();
  const pathAuth = pathname === '/signup' || pathname === '/signin';

  const classNameHeader = () => {
    let className = 'header';
    if (menuActive) {
      className = `${className} header_active`;
    }
    if (loggedIn) {
      className = `${className} header_login`;
    }
    if (pathname === '/') {
      className = `${className} header_cover`;
    }
    if (pathAuth) {
      className = `${className} header_auth`;
    }
    return className;
  };

  function handleMenuClick() {
    setMenuActive(true);
  }

  function handleCloseClick() {
    setMenuActive(false);
  }

  return (
    <header className={classNameHeader()}>
      <Link className='header__logo' to='/' />
      {!loggedIn ? (
        <Navigation>
          <Link className='header__link' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__button' to='/signin'>
            Войти
          </Link>
        </Navigation>
      ) : (
        <>
          <div className='header__wrapper'>
            <Navigation>
              <NavLink className='header__link' to='/'>
                Главная
              </NavLink>
              <NavLink className='header__link' to='/movies'>
                Фильмы
              </NavLink>
              <NavLink className='header__link' to='/saved-movies'>
                Сохранённые фильмы
              </NavLink>
            </Navigation>
            <Navigation>
              <NavLink
                className='header__link header__link_profile'
                to='/profile'
              >
                Аккаунт
              </NavLink>
            </Navigation>
            <button
              className='header__button-close'
              type='button'
              aria-label='Закрыть меню'
              onClick={handleCloseClick}
            />
          </div>
          <button
            className='header__button-menu'
            type='button'
            aria-label='Окрыть меню'
            onClick={handleMenuClick}
          />
        </>
      )}
    </header>
  );
};

export default Header;