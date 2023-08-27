import './MoviesList.css';
import Movie from '../Movie/Movie';

const MoviesList = ({
  moviesList,
  onClickMore,
  onMovieLike,
  savedMovies,
  isSavedMoviesPage,
  isShowMoreButton,
  onCardDelete,
}) => {
  return (
    <section className='movies'>
      <ul className='movies__card-list'>
        {moviesList.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id ?? movie._id}
            onMovieLike={onMovieLike}
            onCardDelete={onCardDelete}
            savedMovies={savedMovies}
            isSavedMoviesPage={isSavedMoviesPage}
          />
        ))}
      </ul>
      <div className='movies__wrapper'>
        {isShowMoreButton && (
          <button
            type='button'
            className='movies__button-more'
            onClick={onClickMore}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
};

export default MoviesList;
