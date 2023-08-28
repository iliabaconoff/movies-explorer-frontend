import { TIME_SHORT_MOVIES } from "./constants";

export const filterMovies = (value, movies) => {
  const flteredMovies = movies.filter(
    (movie) =>
      movie.nameRU.trim().toLowerCase().includes(value.search.trim().toLowerCase())
      || movie.nameRU.trim().toLowerCase().includes(value.search.trim().toLowerCase())
  )
  if (value.short) {
    return flteredMovies.filter((movie) => movie.duration <= TIME_SHORT_MOVIES);
  } else {
    return flteredMovies;
  }
}

