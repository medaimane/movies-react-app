import {MovieJSON} from '../../services/api/models/MoviesJSON';
import {actionCreatorFactory} from '../../store/ActionCreatorFactory';

const actionCreator = actionCreatorFactory('HOME');

export const HomeActions = {
  search: {
    success: actionCreator<MovieJSON[]>('SEARCH_SUCCESS'),
    failure: actionCreator('SEARCH_FAILURE'),
  },
};

export const HomeViewActions = {
  onSearchInputChange: actionCreator<string>('ON_SEARCH_INPUT_CHANGE'),
};
