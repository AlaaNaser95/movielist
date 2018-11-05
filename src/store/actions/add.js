import * as actionTypes from "./actionTypes";
export const addmovie = value => {
  return {
    type: actionTypes.ADDMOVIE,
    payload: value
  };
};

export const watchMovie = movie => {
  return {
    type: actionTypes.WATCHMOVIE,
    payload: movie
  };
};

export const unwatchMovie = movie => {
  return {
    type: actionTypes.UNWATCHMOVIE,
    payload: movie
  };
};

export const deleteMovie = movie => {
  return {
    type: actionTypes.DELETEMOVIE,
    payload: movie
  };
};

export const filterMovies = value => {
  return {
    type: actionTypes.FILTERMOVIES,
    payload: value
  };
};

export const filterWatched = value => {
  return {
    type: actionTypes.FILTERWATCHED,
    payload: value
  };
};
