import {MovieJSON} from '../../services/api/models/MoviesJSON';
import {Action} from '../../store/Action';
import {ViewState} from '../../store/ViewState';
import {HomeActions, HomeViewActions} from './homeActions';
import {MoviePresentable} from './MoviePresentable';

export interface HomeState {
  isWelcomeVisible: boolean;
  viewState: ViewState;

  search: string;
  movies: MovieJSON[];
  favoritesMovies: MoviePresentable[];
  watchLaterMovies: MoviePresentable[];
}

export const initialHomeState: HomeState = {
  isWelcomeVisible: true,
  viewState: ViewState.Loading,

  search: '',
  movies: [],
  favoritesMovies: [],
  watchLaterMovies: [],
};

export function homeReducer(
  state: HomeState = initialHomeState,
  action: Action
): HomeState {
  switch (action.type) {
    case HomeViewActions.onSearchInputChange.type: {
      return {
        ...state,
        search: action.payload,
        isWelcomeVisible: false,
      };
    }

    case HomeActions.search.success.type: {
      const movies = filterMoviesWithoutPoster(action.payload);
      const isEmpty = movies.length === 0;
      return {
        ...state,
        viewState: isEmpty ? ViewState.Empty : ViewState.Data,
        movies,
      };
    }

    case HomeActions.search.failure.type: {
      return {
        ...state,
        viewState: ViewState.Error,
        movies: [],
      };
    }

    case HomeViewActions.addToFavoriesMovies.type: {
      const movieToAdd: MoviePresentable = action.payload;
      return {
        ...state,
        favoritesMovies: [movieToAdd, ...state.favoritesMovies],
      };
    }

    case HomeViewActions.addToWatchLaterMovies.type: {
      const movieToAdd: MoviePresentable = action.payload;
      return {
        ...state,
        watchLaterMovies: [movieToAdd, ...state.watchLaterMovies],
      };
    }

    case HomeViewActions.removeFromFavoritesMovies.type: {
      const movieToRemove: MoviePresentable = action.payload;
      return {
        ...state,
        favoritesMovies: state.favoritesMovies.filter(
          (m) => m.id !== movieToRemove.id
        ),
      };
    }

    case HomeViewActions.removeFromWatchLaterMovies.type: {
      const movieToRemove: MoviePresentable = action.payload;
      return {
        ...state,
        watchLaterMovies: state.watchLaterMovies.filter(
          (m) => m.id !== movieToRemove.id
        ),
      };
    }

    default: {
      return state;
    }
  }
}

function filterMoviesWithoutPoster(movies: MovieJSON[]): MovieJSON[] {
  return movies.filter((m) => m.poster_path);
}
