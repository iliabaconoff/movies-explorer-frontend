import Main from '../../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useState } from 'react';
import useSearch from '../../hooks/useSearch';
import Preloader from '../../Preloader/Preloader';

const SavedMovies = ({
  loggedIn,
  savedMovies,
  isSavedMoviesPage,
  onCardDelete,
}) => {
  const [valueSearch, setValueSearch] = useState({ search: '', short: false });
  const [isMessageShow, setMessageShow] = useState(false);
  const { filteredMovies, searchStatus, handleSubmitSearch } = useSearch({
    movies: savedMovies,
    isSavedMoviesPage: true,
  });
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main className='main_movies'>
        <SearchForm
          isSavedMoviesPage={isSavedMoviesPage}
          valueSerch={valueSearch}
          setValueSerch={setValueSearch}
          onSubmitSearch={handleSubmitSearch}
          searchStatus={searchStatus}
          isMessageShow={isMessageShow}
          isFormActivated={!searchStatus.isLoading}
        />
        {searchStatus.isLoading ? (
          <Preloader />
        ) : searchStatus.statusMessage ? (
          <p className='main__status'>{searchStatus.statusMessage}</p>
        ) : (
          <MoviesList
            saved={true}
            moviesList={filteredMovies}
            savedMovies={savedMovies}
            isSavedMoviesPage={isSavedMoviesPage}
            onCardDelete={onCardDelete}
          />
        )}
      </Main>
      <Footer />
    </>
  );
};

export default SavedMovies;
