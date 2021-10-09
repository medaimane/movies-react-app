import {actionCreatorFactory} from '../../store/ActionCreatorFactory';

const actionCreator = actionCreatorFactory('HOME');

export const HomeViewActions = {
  start: actionCreator('START'),
};
