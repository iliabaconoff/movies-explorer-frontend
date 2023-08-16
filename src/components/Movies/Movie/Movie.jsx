import './Movie.css';
import { useLocation } from 'react-router-dom';

const Movies = ({ saved, movie, onCardClick, onCardLike, onCardDelete }) => {
  const { pathname } = useLocation();
  function handleClick() {}

  return (
    <li className='movies__item' tabIndex={0}>
      <div className='movies__info'>
        <div className='movies__heading'>
          <h2 className='movies__title'>{movie.nameRU}</h2>

          {pathname === '/movies' ? (
            <button
              type='button'
              className={
                saved
                  ? 'movies__favorite-button movies__favorite-button_active'
                  : 'movies__favorite-button'
              }
            />
          ) : (
            <button type='button' className='movies__delete-button' />
          )}
        </div>

        <p className='movies__duration'>1ч 42м</p>
      </div>
      <img
        className='movies__image'
        src={movie.image}
        alt={movie.nameRU}
        onClick={handleClick}
      />
    </li>
  );
};

export default Movies;
