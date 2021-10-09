import {Observable, of} from 'rxjs';
import {Action, ActionWithPayload} from './Action';

export interface ActionCreator {
  readonly type: string;
  readonly $: () => Observable<Action>;

  (): Action;
}

export interface ActionWithPayloadCreator<Payload> {
  readonly type: string;
  readonly $: (payload: Payload) => Observable<Payload>;

  (payload: Payload): ActionWithPayload<Payload>;
}

export interface ActionCreatorFactory {
  (type: string): ActionCreator;
  <Payload = void>(type: string): ActionWithPayloadCreator<Payload>;
}

export const actionCreatorFactory = (
  namespace: string
): ActionCreatorFactory => {
  return <T>(type: string) => {
    const namespacedType = `${namespace}/${type}`;
    return Object.assign(
      (payload?: T) => ({
        payload,
        type: namespacedType,
      }),
      {
        type: namespacedType,
        $: (payload?: T) =>
          of({
            payload,
            type: namespacedType,
          }),
      }
    );
  };
};
