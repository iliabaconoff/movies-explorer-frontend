import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { filterMovies } from '../../utils/filter';
import {
  KEYWORD_LOCALSTORAGE_SEARCH,
  MESSAGE_TEXT,
  TIMEOUT,
} from '../../utils/constants';

const useSearch = ({ movies, isSavedMoviesPage }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { beforeSearching, noMovies } = MESSAGE_TEXT;
  const { download, preloader } = TIMEOUT;

  const [savedSearch, setSavedSearch] = useState({
    search: '',
    short: false,
    savedMovies: [],
  });

  const [searchStatus, setSearchStatus] = useState({
    statusMessage: beforeSearching,
    isLoading: false,
    isFirstSearch: false,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    if (isSavedMoviesPage && !searchStatus.isLoading) {
      setFilteredMovies(filterMovies(savedSearch, movies));
    }
  }, [isSavedMoviesPage, savedSearch]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setSearchStatus((searchStatus) => ({
        ...searchStatus,
        statusMessage: noMovies,
      }));
    } else {
      resetStatus();
    }
    
  }, [filteredMovies]);

  useEffect(() => {
    if (KEYWORD_LOCALSTORAGE_SEARCH in localStorage && !isSavedMoviesPage) {
      const savedSearch = JSON.parse(
        localStorage.getItem(KEYWORD_LOCALSTORAGE_SEARCH)
      );
      setSavedSearch({
        search: savedSearch.search,
        short: savedSearch.short,
        savedMovies: savedSearch.savedMovies,
      });
      setFilteredMovies(savedSearch.savedMovies);
    }

    if (
      !localStorage.getItem(KEYWORD_LOCALSTORAGE_SEARCH) &&
      !isSavedMoviesPage
    ) {
      setSearchStatus((data) => {
        return {
          ...data,
          isFirstSearch: true,
          statusMessage: beforeSearching,
        };
      });
    }
  }, [beforeSearching, isSavedMoviesPage]);

  useEffect(() => {
    if (isSavedMoviesPage) setFilteredMovies(filterMovies(savedSearch, movies));
  }, [isSavedMoviesPage, movies]);

  useEffect(() => {
    if (
      !isSavedMoviesPage &&
      localStorage.getItem(KEYWORD_LOCALSTORAGE_SEARCH)
    ) {
      setFilteredMovies(savedSearch.savedMovies);
    }
  }, [isSavedMoviesPage, savedSearch]);

  const setLoader = (boolean) => {
    setSearchStatus((data) => {
      return {
        ...data,
        isLoading: boolean,
        isFirstSearch: false,
      };
    });
  };

  const resetStatus = () => {
    setSearchStatus({
      ...searchStatus,
      statusMessage: '',
      isLoading: false,
    });
  };

  const handleSubmitSearch = (value) => {
    if (isSavedMoviesPage) {
      setSavedSearch({
        search: value.search,
        short: value.short,
      });
    }

    resetStatus();
    setLoader(true);
    const data = filterMovies(value, movies);
    setTimeout(
      () => {
        if (data.length === 0) {
          setSearchStatus((data) => {
            return {
              ...data,
              statusMessage: noMovies,
            };
          });
        }
        setFilteredMovies(data);
        setLoader(false);
      },
      searchStatus.isFirstSearch ? download : preloader
    );

    if (!isSavedMoviesPage) {
      localStorage.setItem(
        KEYWORD_LOCALSTORAGE_SEARCH,
        JSON.stringify({
          savedMovies: data,
          short: value.short,
          search: value.search,
        })
      );
    }
  };
  return {
    filteredMovies,
    savedSearch,
    searchStatus,
    handleSubmitSearch,
    setSearchStatus,
    resetStatus,
  };
};

export default useSearch;
