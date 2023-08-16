import './MoviesList.css';
import Movies from '../Movie/Movie';

const MoviesList = ({ saved, moviesList, onClickMore }) => {
  return (
    <section className='movies'>
      <ul className='movies__card-list'>
        {moviesList.map((movie) => (
          <Movies
            movie={movie}
            onCardClick={() => {}}
            key={movie.movieId}
            onCardLike={() => {}}
            onCardDelete={() => {}}
            saved={saved}
          />
        ))}
      </ul>
      <div className='movies__wrapper'>
        {!saved && (
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
