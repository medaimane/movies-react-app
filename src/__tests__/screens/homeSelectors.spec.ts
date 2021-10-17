import {HomeState, initialHomeState} from '../../screens/home/homeReducer';
import {getViewState as sut} from '../../screens/home/homeSelectors';
import {moviesPresentableStub, moviesStub} from '../testDoubles.ts/moviesStub';
import {ViewState} from '../../store/ViewState';

describe('homeSelectors', () => {
  describe('viewState', () => {
    it('returns it as it is', () => {
      const cases: ViewState[] = [
        ViewState.Data,
        ViewState.Empty,
        ViewState.Error,
        ViewState.Loading,
      ];

      cases.forEach((vs) => {
        const state: HomeState = {
          ...initialHomeState,
          viewState: vs,
        };

        const viewState = sut(state, '');

        expect(viewState.viewState).toBe(vs);
      });
    });
  });

  describe('isWelcomeVisible', () => {
    it('returns it as it is', () => {
      const state: HomeState = {
        ...initialHomeState,
        isWelcomeVisible: true,
      };

      const viewState = sut(state, '');

      expect(viewState.isWelcomeVisible).toBeTruthy();
    });
  });

  describe('movies', () => {
    it('returns presentable movies', () => {
      const state: HomeState = {
        ...initialHomeState,
        movies: moviesStub,
      };

      const viewState = sut(state, 'https://images-base-url');

      expect(viewState.movies).toEqual(moviesPresentableStub());
    });
  });

  describe('search', () => {
    it('reeturns it as it is', () => {
      const state: HomeState = {
        ...initialHomeState,
        search: 'some text',
      };

      const viewState = sut(state, '');

      expect(viewState.search).toStrictEqual('some text');
    });
  });
});
