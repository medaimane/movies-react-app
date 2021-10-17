import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {returntypeof} from 'typesafe-actions';
import {MoviesAppBar} from '../../components/MoviesAppBar/MoviesAppBar';
import {MoviesEmptyView} from '../../components/MoviesEmptyView';
import {MoviesList} from '../../components/MoviesList';
import {RemoteData} from '../../components/RemoteData';
import {WelcomeView} from '../../components/WelcomeView';
import {getImagesBaseUrl} from '../../services/networking/BaseUrls';
import {RootState} from '../../store/rootState';
import {HomeViewActions} from './homeActions';
import {getViewState} from './homeSelectors';

const mapStateToProps = (state: RootState) =>
  getViewState(state.home, getImagesBaseUrl());

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(HomeViewActions, dispatch);

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);

type Props = typeof dispatchProps & typeof stateProps;

export function Home(props: Props) {
  const content = () => {
    if (props.isWelcomeVisible) {
      return <WelcomeView />;
    }

    return (
      <RemoteData
        viewState={props.viewState}
        renderData={() => (
          <MoviesList
            movies={props.movies}
            addToFavorites={props.addToFavoriesMovies}
            addToWatchLater={props.addToWatchLaterMovies}
          />
        )}
        renderEmpty={() => <MoviesEmptyView />}
      />
    );
  };

  return (
    <>
      <MoviesAppBar
        search={props.search}
        favoritesMovies={props.favorites}
        watchLaterMovies={props.watchLater}
        onSearchInputChange={props.onSearchInputChange}
        removeFromFavorites={props.removeFromFavoritesMovies}
        removeFromWatchLater={props.removeFromWatchLaterMovies}
      />

      {content()}
    </>
  );
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
