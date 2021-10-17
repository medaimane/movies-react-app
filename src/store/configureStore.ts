import {createStore, applyMiddleware, Store} from 'redux';
import logger from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import {Dependencies, dependencies} from '../dependencies/Dependencies';
import {Action, ActionWithPayload} from './Action';
import {rootEpic} from './rootEpic';
import {rootReducer} from './rootReducer';
import {RootState} from './rootState';

export function configureStore(): Store {
  const epicMiddleware = createEpicMiddleware<
    Action | ActionWithPayload,
    Action | ActionWithPayload,
    RootState,
    Dependencies
  >({dependencies});

  const configuredStore = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
  );

  epicMiddleware.run(rootEpic);

  return configuredStore;
}

export const store = configureStore();
