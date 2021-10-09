import {Action} from '../../store/Action';
import {ViewState} from '../../store/ViewState';

export interface HomeState {
  viewState: ViewState;
}

export const initialHomeState: HomeState = {
  viewState: ViewState.Loading,
};

export function homeReducer(
  state: HomeState = initialHomeState,
  action: Action
): HomeState {
  return {
    ...state,
  };
}
