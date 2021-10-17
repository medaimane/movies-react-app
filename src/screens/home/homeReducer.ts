import {MovieJSON} from '../../services/api/models/MoviesJSON';
import {Action} from '../../store/Action';
import {ViewState} from '../../store/ViewState';
import {HomeActions, HomeViewActions} from './homeActions';

export interface HomeState {
  isWelcomeVisible: boolean;
  viewState: ViewState;

  search: string;
  movies: MovieJSON[];
}

export const initialHomeState: HomeState = {
  isWelcomeVisible: true,
  viewState: ViewState.Loading,

  search: '',
  movies: [],
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

    default: {
      return state;
    }
  }
}

function filterMoviesWithoutPoster(movies: MovieJSON[]): MovieJSON[] {
  return movies.filter((m) => m.poster_path);
}
