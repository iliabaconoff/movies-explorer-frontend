import { BASE_URL_MOVIE, BEATFILM_PATH } from "./constants";

function isOk(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.json().then(res => res));
}

export const getAllMoviesApi = async () => {
  const res = await fetch(`${BASE_URL_MOVIE}${BEATFILM_PATH}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
  const data = await isOk(res);
  return data;
}