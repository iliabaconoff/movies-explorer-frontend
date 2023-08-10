import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';
import Register from '../Registration/Registration';
import Login from '../Login/Login';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [valueRegister, setValueRegister] = useState({});
  const [valueLogin, setValueLogin] = useState({});
  const [, setIsErrorPage] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} loggedIn={loggedIn} />
        <Route
          path='/movies'
          element={
            <ProtectedRouteElement
              element={Movies}
              loggedIn={loggedIn}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRouteElement
              element={SavedMovies}
              loggedIn={loggedIn}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRouteElement
              element={Profile}
              onSubmit={() => console.log('click')}
              setLoggedIn={setLoggedIn}
              isLoading={isLoading}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path='/signup'
          element={
            loggedIn ? (
              <Navigate to='/' replace />
            ) : (
              <Register
                name='registration'
                value={valueRegister}
                setValue={setValueRegister}
                isLoading={isLoading}
              />
            )
          }
        />
        <Route
          path='/signin'
          element={
            loggedIn ? (
              <Navigate to='/movies' replace />
            ) : (
              <Login
                value={valueLogin}
                setValue={setValueLogin}
                isLoading={isLoading}
                setLoggedIn={setLoggedIn}
                onLogin={() => setLoggedIn(true)}/>
            )
          }
        />
        <Route
          path='*'
          element={
            <NotFound setIsErrorPage={setIsErrorPage} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
