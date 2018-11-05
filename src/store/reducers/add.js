import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: [],
  watched: [],
  filteredMovies: [],
  filteredWatched: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDMOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload),
        filteredMovies: state.movies.concat(action.payload)
      };
    default:
      return state;
    case actionTypes.WATCHMOVIE:
      return {
        ...state,
        watched: state.watched.concat(action.payload),
        filteredWatched: state.watched.concat(action.payload),
        movies: state.movies.filter(movie => movie !== action.payload),
        filteredMovies: state.movies.filter(movie => movie !== action.payload)
      };

    case actionTypes.UNWATCHMOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload),
        filteredMovies: state.movies.concat(action.payload),
        watched: state.watched.filter(movie => movie !== action.payload),
        filteredWatched: state.watched.filter(movie => movie !== action.payload)
      };

    case actionTypes.DELETEMOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie !== action.payload),
        filteredMovies: state.movies.filter(movie => movie !== action.payload),
        watched: state.watched.filter(movie => movie !== action.payload),
        filteredWatched: state.watched.filter(movie => movie !== action.payload)
      };

    case actionTypes.FILTERMOVIES:
      return {
        ...state,

        filteredMovies: state.movies.filter(movie =>
          movie.includes(action.payload)
        )
      };

    case actionTypes.FILTERWATCHED:
      return {
        ...state,
        filteredWatched: state.watched.filter(movie =>
          movie.includes(action.payload)
        )
      };
  }
};

export default reducer;
