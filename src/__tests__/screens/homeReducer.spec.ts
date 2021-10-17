import {HomeActions, HomeViewActions} from '../../screens/home/homeActions';
import {
  homeReducer as sut,
  HomeState,
  initialHomeState,
} from '../../screens/home/homeReducer';
import {MovieJSON} from '../../services/api/models/MoviesJSON';
import {ViewState} from '../../store/ViewState';
import {moviePresentableStub, moviesStub} from '../testDoubles.ts/moviesStub';

describe('homeReducer', () => {
  it('has initial state', () => {
    expect(initialHomeState).toEqual(
      expect.objectContaining<HomeState>({
        search: '',
        movies: [],
        viewState: ViewState.Loading,
        isWelcomeVisible: true,
        favoritesMovies: [],
        watchLaterMovies: [],
      })
    );
  });

  describe('when HOME/ON_SEARCH_INPUT_CHANGE actionn received', () => {
    it("sets search to the action's payload and isWelcomeVisible to false", () => {
      const state: HomeState = {
        ...initialHomeState,
        search: '',
      };
      const action = HomeViewActions.onSearchInputChange('some text');

      const newState = sut(state, action);

      expect(newState).toEqual(
        expect.objectContaining({
          search: 'some text',
          isWelcomeVisible: false,
        })
      );
    });
  });

  describe('when HOME/SEARCH_SUCCESS action received', () => {
    describe("when movies array fom action's payload is empty", () => {
      it('sets movies to an empty array and viewSate to Empty', () => {
        const action = HomeActions.search.success([]);
        const state: HomeState = {
          ...initialHomeState,
          movies: moviesStub,
          viewState: ViewState.Loading,
        };

        const newState = sut(state, action);

        expect(newState).toEqual(
          expect.objectContaining({
            movies: [],
            viewState: ViewState.Empty,
          })
        );
      });
    });

    describe("when movies array fom action's payload is not empty", () => {
      it('sets fiiltred movies (by poster path) and viewSate to Data', () => {
        const movies: MovieJSON[] = [
          ...moviesStub,
          {
            id: 4,
            overview: 'some overview',
            popularity: 4,
            poster_path: null,
            title: 'some title',
          },
        ];
        const action = HomeActions.search.success(movies);
        const state: HomeState = {
          ...initialHomeState,
          movies: [],
          viewState: ViewState.Loading,
        };

        const newState = sut(state, action);

        expect(newState).toEqual(
          expect.objectContaining({
            movies: moviesStub,
            viewState: ViewState.Data,
          })
        );
      });
    });
  });

  describe('when HOME/SEARCH_FAILURE action received', () => {
    it('sets movies to an empty array and viewState to Error', () => {
      const action = HomeActions.search.failure();
      const state: HomeState = {
        ...initialHomeState,
        movies: moviesStub,
        viewState: ViewState.Loading,
      };

      const newState = sut(state, action);

      expect(newState).toEqual(
        expect.objectContaining({
          movies: [],
          viewState: ViewState.Error,
        })
      );
    });
  });

  describe('when HOME/ADD_TO_FAVORITES_MOVIES action received', () => {
    it('adds movie from payload to favorites list', () => {
      const action = HomeViewActions.addToFavoriesMovies(moviePresentableStub);
      const state: HomeState = {
        ...initialHomeState,
        favoritesMovies: [],
      };

      const newState = sut(state, action);

      expect(newState).toEqual(
        expect.objectContaining({
          favoritesMovies: [moviePresentableStub],
        })
      );
    });
  });

  describe('when HOME/ADD_TO_WATCH_LATER_MOVIES action received', () => {
    it('adds movie from payload to watch later list', () => {
      const action =
        HomeViewActions.addToWatchLaterMovies(moviePresentableStub);
      const state: HomeState = {
        ...initialHomeState,
        watchLaterMovies: [],
      };

      const newState = sut(state, action);

      expect(newState).toEqual(
        expect.objectContaining({
          watchLaterMovies: [moviePresentableStub],
        })
      );
    });
  });

  describe('when HOME/REMOVE_FROM_FAVORITES_MOVIES action received', () => {
    it('removes movie from payload from favorites list', () => {
      const action =
        HomeViewActions.removeFromFavoritesMovies(moviePresentableStub);
      const state: HomeState = {
        ...initialHomeState,
        favoritesMovies: [moviePresentableStub],
      };

      const newState = sut(state, action);

      expect(newState).toEqual(
        expect.objectContaining({
          favoritesMovies: [],
        })
      );
    });
  });

  describe('when HOME/REMOVE_FROM_WATCH_LATER_MOVIES action received', () => {
    it('removes movie from payload from watch later list', () => {
      const action =
        HomeViewActions.removeFromWatchLaterMovies(moviePresentableStub);
      const state: HomeState = {
        ...initialHomeState,
        watchLaterMovies: [moviePresentableStub],
      };

      const newState = sut(state, action);

      expect(newState).toEqual(
        expect.objectContaining({
          watchLaterMovies: [],
        })
      );
    });
  });
});
