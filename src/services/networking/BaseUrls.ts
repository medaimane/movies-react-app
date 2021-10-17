export function getApiKey(): string {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error('Ooops! The api key is not available!');
  }

  return apiKey;
}

export function getApiBaseUrl(): string {
  const baseUrl = process.env.REACT_APP_TMDB_API_BASE_URL;

  if (!baseUrl) {
    throw new Error('Ooops! The api base url is not available!');
  }

  return baseUrl;
}

export function getImagesBaseUrl(): string {
  const baseUrl = process.env.REACT_APP_TMDB_IMAGES_BASE_URL;

  if (!baseUrl) {
    throw new Error('Ooops! The images base url is not available!');
  }

  return baseUrl;
}
