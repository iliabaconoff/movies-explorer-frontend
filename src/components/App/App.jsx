import { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';
import Register from '../Registration/Registration';
import Login from '../Login/Login';
import {
  ANY_OTHER_PATH,
  DEVICE_SETTING,
  KEYWORD_LOCALSTORAGE_ISLOGGEDIN,
  KEYWORD_LOCALSTORAGE_JWT,
  KEYWORD_RESIZE,
  LOGIN_PATH,
  MAIN_PATH,
  MESSAGE_TEXT,
  MOVIES_PATH,
  PROFILE_PATH,
  REGISTER_PATH,
  SAVED_MOVIES_PATH,
  TIMEOUT,
} from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as apiMain from '../../utils/MainApi';
import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip';
import { getAllMoviesApi } from '../../utils/MoviesApi';

const App = () => {
  const resizeCooldown = useRef(null);
  const [device, setDevice] = useState(DEVICE_SETTING.desktop.device);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: localStorage.getItem(KEYWORD_LOCALSTORAGE_ISLOGGEDIN),
  });
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  function onRegister(values) {
    apiMain
      .register(values)
      .then(() => {
        handleInfoTooltipPositive(MESSAGE_TEXT.register);
        handleLogin(values);
      })
      .catch((err) => {
        return err.then((res) => handleInfoTooltipNegative(res));
      });
  }

  function handleLogin(values) {
    apiMain
      .authorize(values)
      .then((data) => {
        if (data.token) {
          navigate(MOVIES_PATH, { replace: true });
          setCurrentUser({ ...currentUser, isLoggedIn: true });
          localStorage.setItem(KEYWORD_LOCALSTORAGE_JWT, data.token);
          localStorage.setItem(KEYWORD_LOCALSTORAGE_ISLOGGEDIN, true);
        }
      })
      .catch((err) => {
        return err.then((res) => handleInfoTooltipNegative(res));
      });
  }

  function tokenCheck() {
    if (KEYWORD_LOCALSTORAGE_JWT in localStorage) {
      apiMain
        .checkToken()
        .then(({ data }) => {
          if (data) {
            setCurrentUser({
              name: data.name,
              email: data.email,
              isLoggedIn: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setCurrentUser({});
          localStorage.clear();
          navigate(MAIN_PATH, { replace: true });
        });
    }
  }
  useEffect(() => {
    tokenCheck();
  }, [currentUser.isLoggedIn]);

  useEffect(() => {
    const handleChangeDevice = () => {
      clearTimeout(resizeCooldown.current);
      resizeCooldown.current = setTimeout(() => {
        if (window.innerWidth < DEVICE_SETTING.mobile.maxSize) {
          setDevice(DEVICE_SETTING.mobile.device);
        } else if (window.innerWidth < DEVICE_SETTING.tablet.maxSize) {
          setDevice(DEVICE_SETTING.tablet.device);
        } else {
          setDevice(DEVICE_SETTING.desktop.device);
        }
      }, TIMEOUT.resize);
    };

    handleChangeDevice();
    window.addEventListener(KEYWORD_RESIZE, handleChangeDevice);

    return () => {
      clearTimeout(resizeCooldown.current);
      window.removeEventListener(KEYWORD_RESIZE, handleChangeDevice);
    };
  }, [device]);

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      apiMain
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies.data);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser.isLoggedIn]);

  function handleInfoTooltipPositive(message) {
    setIsInfoTooltipPopupOpen(true);
    setMessage(message);
  }

  function handleInfoTooltipNegative({ error, message }) {
    setIsInfoTooltipPopupOpen(true);
    setErrorMessage(message || error);
  }

  function closePopup() {
    setIsInfoTooltipPopupOpen(false);
    setMessage('');
    setErrorMessage('');
  }

  function handleCardLike(movie) {
    const isLiked = savedMovies.some((item) => item.movieId === movie.movieId);
    if (!isLiked) {
      apiMain
        .addSavedMovies(movie)
        .then((newMovie) => {
          setSavedMovies([...savedMovies, newMovie.data]);
        })
        .catch((err) => console.log(err));
    } else {
      const movieId = savedMovies.find(
        (item) => item.movieId === movie.movieId
      )._id;
      apiMain
        .deleteMovies(movieId)
        .then(() => {
          setSavedMovies((movies) =>
            movies.filter((item) => item._id !== movieId)
          );
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(movie) {
    apiMain
      .deleteMovies(movie._id)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(value) {
    apiMain
      .setUserInfo(value)
      .then(({ data }) => {
        handleInfoTooltipPositive(MESSAGE_TEXT.saveProfile);
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email,
        });
      })
      .catch((err) => {
        return err.then((res) => handleInfoTooltipNegative(res));
      });
  }

  function getAllMovies() {
    getAllMoviesApi()
      .then((res) => {
        setAllMovies(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path={MAIN_PATH}
          element={<Landing loggedIn={currentUser.isLoggedIn} />}
        />
        <Route
          path={MOVIES_PATH}
          element={
            <ProtectedRouteElement
              element={Movies}
              loggedIn={currentUser.isLoggedIn}
              onMovieLike={handleCardLike}
              isSavedMoviesPage={false}
              savedMovies={savedMovies}
              allMovies={allMovies}
              device={device}
              getAllMovies={getAllMovies}
            />
          }
        />
        <Route
          path={SAVED_MOVIES_PATH}
          element={
            <ProtectedRouteElement
              element={SavedMovies}
              loggedIn={currentUser.isLoggedIn}
              isSavedMoviesPage={true}
              savedMovies={savedMovies}
              onCardDelete={handleCardDelete}
            />
          }
        />
        <Route
          path={PROFILE_PATH}
          element={
            <ProtectedRouteElement
              element={Profile}
              onSubmit={handleUpdateUser}
              loggedIn={currentUser.isLoggedIn}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path={REGISTER_PATH}
          element={
            currentUser.isLoggedIn ? (
              <Navigate to={MAIN_PATH} replace />
            ) : (
              <Register name='registration' onRegister={onRegister} />
            )
          }
        />
        <Route
          path={LOGIN_PATH}
          element={
            currentUser.isLoggedIn ? (
              <Navigate to={MAIN_PATH} replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path={ANY_OTHER_PATH} element={<NotFound />} />
      </Routes>

      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        onClose={closePopup}
        errorMessage={errorMessage}
        name='info'
        message={message}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
