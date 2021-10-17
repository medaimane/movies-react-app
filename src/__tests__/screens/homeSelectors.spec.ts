import {HomeState, initialHomeState} from '../../screens/home/homeReducer';
import {getViewState as sut} from '../../screens/home/homeSelectors';
import {
  moviePresentableStub,
  moviesPresentableStub,
  moviesStub,
  movieStub,
} from '../testDoubles.ts/moviesStub';
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

      expect(viewState.movies).toEqual(moviesPresentableStub);
    });

    describe('when a favorite movie was set', () => {
      it('returns presentable movie with isFavorite as true', () => {
        const state: HomeState = {
          ...initialHomeState,
          movies: [movieStub],
          favoritesMovies: [moviePresentableStub],
        };

        const viewState = sut(state, 'https://images-base-url');

        expect(viewState.movies).toEqual([
          {
            ...moviePresentableStub,
            isFavorite: true,
          },
        ]);
      });
    });

    describe('when a watch later movie was set', () => {
      it('returns presentable movie with isWatchLater as true', () => {
        const state: HomeState = {
          ...initialHomeState,
          movies: [movieStub],
          watchLaterMovies: [moviePresentableStub],
        };

        const viewState = sut(state, 'https://images-base-url');

        expect(viewState.movies).toEqual([
          {
            ...moviePresentableStub,
            isWatchLater: true,
          },
        ]);
      });
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

  describe('favorites', () => {
    it('returns it as it is', () => {
      const state: HomeState = {
        ...initialHomeState,
        favoritesMovies: [moviePresentableStub],
      };

      const viewSate = sut(state, '');

      expect(viewSate.favorites).toEqual([moviePresentableStub]);
    });
  });

  describe('watchLater', () => {
    it('returns it as it is', () => {
      const state: HomeState = {
        ...initialHomeState,
        watchLaterMovies: [moviePresentableStub],
      };

      const viewSate = sut(state, '');

      expect(viewSate.watchLater).toEqual([moviePresentableStub]);
    });
  });
});
