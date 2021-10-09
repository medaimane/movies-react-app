import {Epic} from 'redux-observable';
import {Dependencies} from '../dependencies/Dependencies';
import {Action, ActionWithPayload} from './Action';
import {RootState} from './rootState';

export type EpicType = Epic<
  Action | ActionWithPayload,
  Action | ActionWithPayload,
  RootState,
  Dependencies
>;
