import {Observable} from 'rxjs';
import {MovieJSON} from '../models/MoviesJSON';

export interface MoviesGateway {
  search(query: string): Observable<MovieJSON[]>;
}
