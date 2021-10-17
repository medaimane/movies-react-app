import {map, Observable} from 'rxjs';
import {NetworkingService} from '../../networking/NetworkingService';
import {MovieJSON, MoviesJSON} from '../models/MoviesJSON';
import {MoviesGateway} from './MoviesGateway';

export class MoviesService implements MoviesGateway {
  constructor(private readonly networkingService: NetworkingService) {}

  search(query: string): Observable<MovieJSON[]> {
    return this.networkingService
      .getJSON<MoviesJSON>('3/search/movie', `query=${query}&page=1`)
      .pipe(map((data) => data.results));
  }
}
