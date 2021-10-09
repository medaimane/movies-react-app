import {AnyAction} from 'redux';

export interface Action extends AnyAction {
  type: string;
}

export interface ActionWithPayload<T = any> extends AnyAction {
  type: string;
  payload: T;
}
