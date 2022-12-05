import { Movie } from '../entities';
import { PaginatedMoviesDto } from './paginated-movies.dto';

export class PopularMoviesResponseDto {
  success: boolean;
  movies: PaginatedMoviesDto;
}
