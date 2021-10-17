import {combineEpics, ofType} from 'redux-observable';
import {catchError, debounceTime, EMPTY, map, of, switchMap} from 'rxjs';
import {EpicType} from '../../store/EpicType';
import {HomeActions, HomeViewActions} from './homeActions';

const onSearch: EpicType = (action$, _state$, {moviesGateway}) =>
  action$.pipe(
    ofType(HomeViewActions.onSearchInputChange.type),
    switchMap((action) => {
      const query: string = action.payload;

      if (!query) {
        return EMPTY;
      }

      return moviesGateway.search(query).pipe(
        debounceTime(10000),
        map(HomeActions.search.success),
        catchError(() => of(HomeActions.search.failure()))
      );
    })
  );

export const homeEpic = combineEpics(onSearch);
