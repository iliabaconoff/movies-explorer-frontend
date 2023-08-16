import { dataList } from '../../../utils/movies-data';
import Main from '../../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const SavedMovies = ({ loggedIn }) => {
  console.log(loggedIn);
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main className='main_movies'>
        <SearchForm />
        <MoviesList saved={true} moviesList={dataList.slice(0, 3)} />
      </Main>
      <Footer />
    </>
  );
};

export default SavedMovies;
