import {ViewState} from '../../store/ViewState';
import {HomeState} from './homeReducer';
import {buildMoviesPresentable, MoviePresentable} from './MoviePresentable';

export interface HomeViewState {
  viewState: ViewState;
  isWelcomeVisible: boolean;

  search: string;
  movies: MoviePresentable[];
  favorites: MoviePresentable[];
  watchLater: MoviePresentable[];
}

export function getViewState(
  state: HomeState,
  imagesBaseUrl: string
): HomeViewState {
  return {
    search: state.search,
    viewState: state.viewState,
    movies: buildMoviesPresentable(
      state.movies,
      state.favoritesMovies,
      state.watchLaterMovies,
      imagesBaseUrl
    ),
    isWelcomeVisible: state.isWelcomeVisible,
    favorites: state.favoritesMovies,
    watchLater: state.watchLaterMovies,
  };
}
