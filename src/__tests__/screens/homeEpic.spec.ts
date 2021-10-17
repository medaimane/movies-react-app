import {homeEpic as sut} from '../../screens/home/homeEpic';
import {MoviesServiceStub} from '../testDoubles.ts/MoviesServiceStub';
import {HomeActions, HomeViewActions} from '../../screens/home/homeActions';
import {RootState} from '../../store/rootState';
import {of, throwError} from 'rxjs';
import {StateObservable} from 'redux-observable';
import {expectedAction} from '../testDoubles.ts/expectedAction';
import {MovieJSON} from '../../services/api/models/MoviesJSON';

describe('homeEpic', () => {
  let state$: StateObservable<RootState>;
  let moviesGateway: MoviesServiceStub;

  beforeEach(() => {
    moviesGateway = new MoviesServiceStub();
  });

  describe('when HOME/ON_SEARCH_INPUT_CHANGE action received', () => {
    it('does nothing when search query is empty', () => {
      const action$ = of(HomeViewActions.onSearchInputChange(''));
      const next = jest.fn();

      sut(action$, state$, {moviesGateway}).subscribe(next);

      expect(moviesGateway.search).not.toBeCalled();
      expect(next).not.toBeCalled();
    });

    describe('when search query is available', () => {
      const action$ = of(HomeViewActions.onSearchInputChange('some text'));

      it('calls gateway with query text as param', () => {
        sut(action$, state$, {moviesGateway}).subscribe();

        expect(moviesGateway.search).toBeCalledWith('some text');
      });

      describe('when call succeed', () => {
        it('emits HOME/SEARCH_SUCCESS action with the movies list as payload', () => {
          const next = jest.fn();
          const emptyMovies: MovieJSON[] = [];
          moviesGateway.search.mockReturnValue(of(emptyMovies));

          sut(action$, state$, {moviesGateway}).subscribe(next);

          expect(next).toBeCalledWith(
            expectedAction(HomeActions.search.success.type, emptyMovies)
          );
        });
      });

      describe('when call failed', () => {
        it('emits HOME/SEARCH_FAILED action', () => {
          const next = jest.fn();
          moviesGateway.search.mockReturnValue(
            throwError(() => new Error('some error'))
          );

          sut(action$, state$, {moviesGateway}).subscribe(next);

          expect(next).toBeCalledWith(
            expectedAction(HomeActions.search.failure.type)
          );
        });
      });
    });
  });
});
