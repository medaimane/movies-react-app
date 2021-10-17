import {ajax} from 'rxjs/ajax';
import {MoviesGateway} from '../services/api/MoviesGateway/MoviesGateway';
import {MoviesService} from '../services/api/MoviesGateway/MoviesService';
import {DevNetworkingServiceConfig} from '../services/networking/NetworkingServiceConfig';
import {NetworkingServiceImpl} from '../services/networking/NetworkingServiceImpl';

const config = new DevNetworkingServiceConfig();

const networkingService = new NetworkingServiceImpl(ajax, config);

export interface Dependencies {
  moviesGateway: MoviesGateway;
}

export const dependencies: Dependencies = {
  moviesGateway: new MoviesService(networkingService),
};
