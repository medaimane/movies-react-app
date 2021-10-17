import {MoviePresentable} from '../../screens/home/MoviePresentable';
import {MovieJSON} from '../../services/api/models/MoviesJSON';

export const movieStub: MovieJSON = {
  id: 1,
  overview: 'overview one',
  popularity: 1,
  poster_path: '/poster-one',
  title: 'title one',
};

export const moviesStub: MovieJSON[] = [
  movieStub,
  {
    id: 2,
    overview: 'overview two',
    popularity: 2,
    poster_path: '/poster-two',
    title: 'title two',
  },
  {
    id: 3,
    overview: 'overview three',
    popularity: 3,
    poster_path: '/poster-three',
    title: 'title three',
  },
];

export const moviePresentableStub: MoviePresentable = {
  id: 1,
  title: 'title one',
  overview: 'overview one',
  poster: 'https://images-base-url/t/p/w500/poster-one',
  isFavorite: false,
  isWatchLater: false,
};

export const moviesPresentableStub: MoviePresentable[] = [
  moviePresentableStub,
  {
    id: 2,
    title: 'title two',
    overview: 'overview two',
    poster: 'https://images-base-url/t/p/w500/poster-two',
    isFavorite: false,
    isWatchLater: false,
  },
  {
    id: 3,
    title: 'title three',
    overview: 'overview three',
    poster: 'https://images-base-url/t/p/w500/poster-three',
    isFavorite: false,
    isWatchLater: false,
  },
];
