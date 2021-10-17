import {ViewState} from '../../store/ViewState';
import {HomeState} from './homeReducer';
import {buildMoviesPresentable, MoviePresentable} from './MoviePresentable';

export interface HomeViewState {
  viewState: ViewState;
  isWelcomeVisible: boolean;

  search: string;
  movies: MoviePresentable[];
}

export function getViewState(
  state: HomeState,
  imagesBaseUrl: string
): HomeViewState {
  return {
    search: state.search,
    viewState: state.viewState,
    movies: buildMoviesPresentable(state.movies, imagesBaseUrl),
    isWelcomeVisible: state.isWelcomeVisible,
  };
}
