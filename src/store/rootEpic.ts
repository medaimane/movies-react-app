import {combineEpics} from 'redux-observable';
import {homeEpic} from '../screens/home/homeEpic';

export const rootEpic = combineEpics(homeEpic);
