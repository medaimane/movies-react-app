import {combineEpics, ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs';
import {EpicType} from '../../store/EpicType';
import {HomeViewActions} from './homeActions';

const start: EpicType = (action$, _state$, {}) =>
  action$.pipe(
    ofType(HomeViewActions.start.type),
    tap(() => console.log('Home started')),
    ignoreElements()
  );

export const homeEpic = combineEpics(start);
