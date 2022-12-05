import { Movie } from '../entities';
import { PaginationParamsDto } from '../dtos/pagination-params.dto';
import { PaginatedMoviesDto } from '../dtos/paginated-movies.dto';

export abstract class IApiServices {
  abstract getPopularMovies(
    paginationParamsDto: PaginationParamsDto,
  ): Promise<PaginatedMoviesDto>;

  abstract searchMovieByTitle(
    title: string,
    language: string,
  ): Promise<PaginatedMoviesDto>;

  abstract get(movieId: number, language: string): Promise<Movie>;
}
