import { Movie } from '../entities';

export class PaginatedMoviesDto {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}
