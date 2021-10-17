import {MovieJSON} from '../../services/api/models/MoviesJSON';
import {actionCreatorFactory} from '../../store/ActionCreatorFactory';
import {MoviePresentable} from './MoviePresentable';

const actionCreator = actionCreatorFactory('HOME');

export const HomeActions = {
  search: {
    success: actionCreator<MovieJSON[]>('SEARCH_SUCCESS'),
    failure: actionCreator('SEARCH_FAILURE'),
  },
};

export const HomeViewActions = {
  onSearchInputChange: actionCreator<string>('ON_SEARCH_INPUT_CHANGE'),

  addToFavoriesMovies: actionCreator<MoviePresentable>(
    'ADD_TO_FAVORITES_MOVIES'
  ),
  addToWatchLaterMovies: actionCreator<MoviePresentable>(
    'ADD_TO_WATCH_LATER_MOVIES'
  ),

  removeFromFavoritesMovies: actionCreator<MoviePresentable>(
    'REMOVE_FROM_FAVORITES_MOVIES'
  ),
  removeFromWatchLaterMovies: actionCreator<MoviePresentable>(
    'REMOVE_FROM_WATCH_LATER_MOVIES'
  ),
};
