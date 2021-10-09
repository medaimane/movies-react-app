import {HomeState, initialHomeState} from '../screens/home/homeReducer';

export interface RootState {
  home: HomeState;
}

export const initialRootState: RootState = {
  home: initialHomeState,
};
