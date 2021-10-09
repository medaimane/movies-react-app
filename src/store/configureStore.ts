import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import {Dependencies, dependencies} from '../dependencies/Dependencies';
import {Action, ActionWithPayload} from './Action';
import {rootEpic} from './rootEpic';
import {rootReducer} from './rootReducer';
import {RootState} from './rootState';

export function configureStore() {
  const epicMiddleware = createEpicMiddleware<
    Action | ActionWithPayload,
    Action | ActionWithPayload,
    RootState,
    Dependencies
  >({dependencies});

  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
