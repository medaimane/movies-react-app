import {getApiBaseUrl, getApiKey} from './BaseUrls';

export interface NetworkingServiceConfig {
  readonly baseUrl: string;
  readonly apiKey: string;
  readonly timeout: number;
}

export class DevNetworkingServiceConfig implements NetworkingServiceConfig {
  readonly baseUrl = getApiBaseUrl();
  readonly apiKey = getApiKey();
  readonly timeout = 30000;
}
