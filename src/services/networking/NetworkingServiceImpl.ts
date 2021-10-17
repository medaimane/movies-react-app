import {Observable, throwError} from 'rxjs';
import {AjaxResponse} from 'rxjs/ajax';
import {catchError, map} from 'rxjs/operators';
import {NetworkingServiceConfig} from './NetworkingServiceConfig';
import {NetworkingService} from './NetworkingService';
import {AjaxCreationMethod} from 'rxjs/internal/ajax/ajax';
import {Dict} from '../api/Dict';
import {HTTPMethod} from './HTTPMethod';

export class NetworkingServiceImpl implements NetworkingService {
  constructor(
    private readonly ajaxCreationMethod: AjaxCreationMethod,
    private readonly configuration: NetworkingServiceConfig
  ) {}

  getJSON<T>(endpoint: string, params?: string, headers?: Dict): Observable<T> {
    const url = this.buildURL(endpoint, params);

    return this.sendRequest<T>(url, HTTPMethod.GET, headers).pipe(
      map((response) => {
        log(url, response);

        return response.response;
      }),
      catchError((error) => {
        logError(url, error);

        return throwError(() => error);
      })
    );
  }

  sendRequest<T>(
    url: string,
    method: HTTPMethod,
    headers?: Dict,
    body?: Dict
  ): Observable<AjaxResponse<T>> {
    return this.ajaxCreationMethod({
      url,
      method,
      headers,
      body,
      timeout: this.configuration.timeout,
    });
  }

  buildURL(endpoint: string, params?: string) {
    const {baseUrl, apiKey} = this.configuration;
    return (
      baseUrl + '/' + endpoint + '?api_key=' + apiKey + '&' + (params ?? '')
    );
  }
}

const log = <T>(url: string, data: T) => console.log(`[URL: ${url}]`, data);
const logError = (url: string, err: Error) =>
  console.error(`[URL: ${url}]`, err);
