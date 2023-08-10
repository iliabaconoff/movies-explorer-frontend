import MoviesList from './MoviesList/MoviesList';
import SearchForm from './SearchForm/SearchForm';
import { dataList } from '../../utils/movies-data';
import { useState } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = ({ loggedIn }) => {
  const [maxMovies, setMaxMovies] = useState(5);
  function handleClickMore() {
    setMaxMovies(() => maxMovies + 3);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main className='main_movies'>
        <SearchForm />

        <MoviesList
          saved={false}
          moviesList={dataList.slice(0, maxMovies)}
          onClickMore={handleClickMore}
        />
      </Main>
      <Footer />
    </>
  );
};

export default Movies;
