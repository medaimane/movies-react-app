import {combineReducers} from 'redux';
import {homeReducer} from '../screens/home/homeReducer';

export const rootReducer = combineReducers({
  home: homeReducer,
});
