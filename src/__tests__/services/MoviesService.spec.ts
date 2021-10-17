import {of, throwError} from 'rxjs';
import {MoviesJSON} from '../../services/api/models/MoviesJSON';
import {MoviesGateway} from '../../services/api/MoviesGateway/MoviesGateway';
import {MoviesService} from '../../services/api/MoviesGateway/MoviesService';
import {moviesStub} from '../testDoubles.ts/moviesStub';
import {NetworkingServiceImplStub} from '../testDoubles.ts/NetworkingServiceImplStub';

describe('MoviesService', () => {
  let sut: MoviesGateway;
  let networkingService: NetworkingServiceImplStub;

  beforeEach(() => {
    networkingService = new NetworkingServiceImplStub();
    networkingService.getJSON.mockReturnValue(of(void 0));

    sut = new MoviesService(networkingService);
  });

  describe('search', () => {
    it('calls networking getJSON method with endpoint', () => {
      sut.search('some text').subscribe();

      expect(networkingService.getJSON).toBeCalledWith(
        '3/search/movie',
        'query=some text&page=1'
      );
    });

    describe('happy flow', () => {
      it('returns movies array', () => {
        const json: MoviesJSON = {
          page: 1,
          results: moviesStub,
        };
        networkingService.getJSON.mockReturnValue(of(json));
        const next = jest.fn();

        sut.search('some text').subscribe(next);

        expect(next).toBeCalledWith(moviesStub);
      });
    });

    describe('when call failed', () => {
      const someError = new Error('some error');
      networkingService.getJSON.mockReturnValue(throwError(() => someError));
      const next = jest.fn();
      const error = jest.fn();

      sut.search('some text').subscribe(next, error);

      expect(next).not.toBeCalled();
      expect(error).toBeCalledWith(someError);
    });
  });
});
