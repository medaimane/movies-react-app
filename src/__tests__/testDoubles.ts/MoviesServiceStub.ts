import {MoviesGateway} from '../../services/api/MoviesGateway/MoviesGateway';

export class MoviesServiceStub implements MoviesGateway {
    search = jest.fn();
}
