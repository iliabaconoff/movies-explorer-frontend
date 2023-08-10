import './Movie.css';
import { useLocation } from 'react-router-dom';

const Movies = ({ saved, movie, onCardClick, onCardLike, onCardDelete }) => {
  const { pathname } = useLocation();
  function handleClick() {}

  return (
    <li className='movie__item' tabIndex={0}>
      <div className='movie__info'>
        <div className='movie__heading'>
          <h1 className='movie__title'>{movie.nameRU}</h1>

          {pathname === '/movies' ? (
            <button
              type='button'
              className={
                saved
                  ? 'movie__favorite-button movie__favorite-button_active'
                  : 'movie__favorite-button'
              }
            />
          ) : (
            <button type='button' className='movie__delete-button' />
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
