import {MovieJSON} from '../../services/api/models/MoviesJSON';

export interface MoviePresentable {
  id: number;
  title: string;
  poster: string;
  overview: string;
  isFavorite: boolean;
  isWatchLater: boolean;
}

export function buildMoviesPresentable(
  moviesJSON: MovieJSON[],
  favorites: MoviePresentable[],
  watchLater: MoviePresentable[],
  imagesBaseUrl: string
): MoviePresentable[] {
  return moviesJSON.map((m) => ({
    id: m.id,
    title: m.title,
    poster: buildPosterUrl(imagesBaseUrl, m.poster_path!),
    overview: m.overview,
    isFavorite: favorites.some((f) => f.id === m.id),
    isWatchLater: watchLater.some((w) => w.id === m.id),
  }));
}

function buildPosterUrl(baseUrl: string, path: string): string {
  return baseUrl + '/t/p/w500' + path;
}
