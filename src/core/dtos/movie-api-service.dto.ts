export class MovieApiServiceDto {
  id: number;
  imdb_id: string;
  genres?: Array<Genre>;
  genre_ids?: Array<number>;
  original_language: string;
  title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

class Genre {
  id: number;
  name: string;
}
