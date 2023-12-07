import { BASE_URL_MOVIE } from '../../../utils/constants';
import './Movie.css';

const Movie = ({
  saved,
  movie,
  onCardClick,
  onMovieLike,
  onCardDelete,
  savedMovies,
  isSavedMoviesPage,
}) => {
  const isLiked =
    !isSavedMoviesPage && savedMovies.some((item) => item.movieId === movie.id);

  function handleClick() {
    window.open(movie.trailerLink, '_blank', 'noopener noreferrer');
  }

  function handleLikeMovie() {
    onMovieLike({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: BASE_URL_MOVIE + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: BASE_URL_MOVIE + movie.image.formats.thumbnail.url,
      movieId: movie.id,
    });
  }

  return (
    <li className='movies__item' tabIndex={0}>
      <div className='movies__info'>
        <div className='movies__heading'>
          <h2 className='movies__title'>{movie.nameRU}</h2>

          {!isSavedMoviesPage ? (
            <button
              type='button'
              onClick={handleLikeMovie}
              className={
                isLiked
                  ? 'movies__favorite-button movies__favorite-button_active'
                  : 'movies__favorite-button'
              }
            />
          ) : (
            <button
              type='button'
              className='movies__delete-button'
              onClick={() => onCardDelete(movie)}
            />
          )}
        </div>

        <p className='movies__duration'>
          {(movie.duration / 60) | 0}ч {movie.duration % 60}м
        </p>
      </div>
      <img
        className='movies__image'
        src={isSavedMoviesPage ? movie.image : BASE_URL_MOVIE + movie.image.url}
        alt={movie.nameRU}
        onClick={handleClick}
      />
    </li>
  );
};

export default Movie;
