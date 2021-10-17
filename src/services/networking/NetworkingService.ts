import {Observable} from 'rxjs';
import {Dict} from '../api/Dict';

export interface NetworkingService {
  getJSON<T>(endpoint: string, params?: string, headers?: Dict): Observable<T>;
}
