import {MovieJSON} from '../../services/api/models/MoviesJSON';

export interface MoviePresentable {
  title: string;
  poster: string;
  overview: string;
}

export function buildMoviesPresentable(
  moviesJSON: MovieJSON[],
  imagesBaseUrl: string
): MoviePresentable[] {
  return moviesJSON.map((m) => ({
    title: m.title,
    poster: buildPosterUrl(imagesBaseUrl, m.poster_path!),
    overview: m.overview,
  }));
}

function buildPosterUrl(baseUrl: string, path: string): string {
  return baseUrl + '/t/p/w500' + path;
}
