import MoviesList from './MoviesList/MoviesList';
import SearchForm from './SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  DEVICE_SETTING,
  KEYWORD_LOCALSTORAGE_SEARCH,
} from '../../utils/constants';
import useSearch from '../hooks/useSearch';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  loggedIn,
  onMovieLike,
  isSavedMoviesPage,
  savedMovies,
  allMovies,
  device,
  getAllMovies,
}) => {
  const [maxMovies, setMaxMovies] = useState(DEVICE_SETTING.desktop.maxMovies);
  const [moreMovies, setMoreMovies] = useState(0);
  const [isShowMoreButton, setShowMoreButton] = useState(false);
  const { filteredMovies, savedSearch, searchStatus, handleSubmitSearch } =
    useSearch({
      movies: allMovies,
      isSavedMoviesPage: false,
    });
  const [valueSerch, setValueSerch] = useState({
    search: savedSearch.search ?? '',
    short: savedMovies.short ?? false,
  });

  function handleClickMore() {
    setMaxMovies((maxMovies) => maxMovies + moreMovies);
  }

  useEffect(() => {
    setMaxMovies(DEVICE_SETTING[device].maxMovies);
    setMoreMovies(DEVICE_SETTING[device].moreMovies);
  }, [device, allMovies]);

  useEffect(() => {
    if (KEYWORD_LOCALSTORAGE_SEARCH in localStorage) {
      const { search, short } = JSON.parse(
        localStorage.getItem(KEYWORD_LOCALSTORAGE_SEARCH)
      );
      setValueSerch({
        search: search,
        short: short,
      });
    }
  }, []);

  useEffect(() => {
    if (!!filteredMovies) {
      if (!(filteredMovies.length <= maxMovies)) {
        setShowMoreButton(true);
      } else {
        setShowMoreButton(false);
      }
    }
  }, [filteredMovies, maxMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main className='main_movies'>
        <SearchForm
          isSavedMoviesPage={isSavedMoviesPage}
          onSubmit={handleSubmitSearch}
          valueSerch={valueSerch}
          setValueSerch={setValueSerch}
          onSubmitSearch={handleSubmitSearch}
          setMaxMovies={setMaxMovies}
          searchStatus={searchStatus}
          isFormActivated={!searchStatus.isLoading}
          savedSearch={savedSearch}
          getAllMovies={getAllMovies}
          device={device}
        />
        {searchStatus.isLoading ? (
          <Preloader />
        ) : (
          <>
            {searchStatus.statusMessage && (
              <p className='main__status'>{searchStatus.statusMessage}</p>
            )}
            <MoviesList
              moviesList={filteredMovies.slice(0, maxMovies)}
              onClickMore={handleClickMore}
              onMovieLike={onMovieLike}
              searchStatus={searchStatus}
              isShowMoreButton={isShowMoreButton}
              isSavedMoviesPage={isSavedMoviesPage}
              savedMovies={savedMovies}
            />
          </>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Movies;
