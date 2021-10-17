export interface MovieJSON {
  id: number;
  overview: string;
  popularity: number;
  poster_path: string | null;
  title: string;
}

export interface MoviesJSON {
  page: number;
  results: MovieJSON[];
}
