import {HomeActions, HomeViewActions} from '../../screens/home/homeActions';
import {
  homeReducer as sut,
  HomeState,
  initialHomeState,
} from '../../screens/home/homeReducer';
import {MovieJSON} from '../../services/api/models/MoviesJSON';
import {ViewState} from '../../store/ViewState';
import {moviesStub} from '../testDoubles.ts/moviesStub';

describe('homeReducer', () => {
  it('has initial state', () => {
    expect(initialHomeState).toEqual(
      expect.objectContaining<HomeState>({
        search: '',
        movies: [],
        viewState: ViewState.Loading,
        isWelcomeVisible: true,
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
});
