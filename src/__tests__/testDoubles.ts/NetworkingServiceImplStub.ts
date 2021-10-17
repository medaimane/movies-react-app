import {NetworkingService} from '../../services/networking/NetworkingService';

export class NetworkingServiceImplStub implements NetworkingService {
  getJSON = jest.fn();
}
