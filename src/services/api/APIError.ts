import {AjaxError} from 'rxjs/ajax';

type DefaultParamsType = Record<string, any>;

export interface ErrorMessage<T extends DefaultParamsType = DefaultParamsType> {
  domain: string;
  message: string;
  reason: string;
  parameters: T;
}

export interface APIError<T extends Record<string, any> = Record<string, any>> {
  status: number;
  errorMessages: ErrorMessage<T>[];
}

export const makeError = (e: AjaxError): APIError => {
  return {
    status: e.status,
    errorMessages: e.xhr.response && e.xhr.response?.error?.errors,
  };
};
