import {
  BASE_URL_MAIN,
  CHANGE_METHOD,
  CREATION_METHOD,
  KEYWORD_LOCALSTORAGE_JWT,
  LOGIN_PATH,
  MOVIES_PATH,
  REGISTER_PATH,
  REMOVAL_METHOD,
  USER_PATH
} from "./constants";

function isOk(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.json().then(res => res));
}

export const register = async ({ name, password, email }) => {
  const res = await fetch(`${BASE_URL_MAIN}${REGISTER_PATH}`, {
    method: CREATION_METHOD,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    })
  });
  const data = await isOk(res);
  return data;
}

export const authorize = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL_MAIN}${LOGIN_PATH}`, {
    method: CREATION_METHOD,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const data = await isOk(res);
  localStorage.setItem('jwt', data.token);
  return data;
};

export const checkToken = async () => {
  const res = await fetch(`${BASE_URL_MAIN}${USER_PATH}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(KEYWORD_LOCALSTORAGE_JWT)}`,
    }
  });
  const data = await isOk(res);
  return data;
}

export const getSavedMovies = async () => {
  const res = await fetch(`${BASE_URL_MAIN}${MOVIES_PATH}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(KEYWORD_LOCALSTORAGE_JWT)}`,
    },
  });
  const data = await isOk(res);
  return data;
}

export const setUserInfo = async ({ name, email }) => {
  const res = await fetch(`${BASE_URL_MAIN}${USER_PATH}`, {
    method: CHANGE_METHOD,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(KEYWORD_LOCALSTORAGE_JWT)}`,
    },
    body: JSON.stringify({ name, email })
  });
  const data = await isOk(res);
  return data;
}

export const addSavedMovies = async (movie) => {
  const res = await fetch(`${BASE_URL_MAIN}${MOVIES_PATH}`, {
    method: CREATION_METHOD,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(KEYWORD_LOCALSTORAGE_JWT)}`,
    },
    body: JSON.stringify(movie)
  });
  const data = await isOk(res);
  return data;
}

export const deleteMovies = async (movieId) => {
  const res = await fetch(`${BASE_URL_MAIN}${MOVIES_PATH}/${movieId}`, {
    method: REMOVAL_METHOD,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(KEYWORD_LOCALSTORAGE_JWT)}`,
    },
  });
  const data = await isOk(res);
  return data;
}
