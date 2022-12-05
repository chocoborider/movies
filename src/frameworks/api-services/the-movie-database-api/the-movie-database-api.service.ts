import { Injectable } from '@nestjs/common';
import { IApiServices } from '../../../core/abstracts';
import { Movie } from '../../../core';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { PaginationParamsDto } from '../../../core/dtos/pagination-params.dto';
import { TheMovieDatabaseApiAdapter } from './the-movie-database-api.adapter';
import { PaginatedMoviesDto } from '../../../core/dtos/paginated-movies.dto';

@Injectable()
export class TheMovieDatabaseApiService implements IApiServices {
  get baseUrl() {
    return this.configService.get<string>('THE_MOVIE_BASE_URL');
  }

  get apiKey() {
    return this.configService.get<string>('THE_MOVIE_DB_API_KEY');
  }

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly theMovieDatabaseApiAdapter: TheMovieDatabaseApiAdapter,
  ) {}

  getPopularMovies(
    paginationParamsDto: PaginationParamsDto,
  ): Promise<PaginatedMoviesDto> {
    const movies$ = this.httpService
      .get(`${this.baseUrl}/movie/popular`, {
        params: {
          api_key: this.apiKey,
          ...paginationParamsDto,
        },
      })
      .pipe(
        map(({ data }) => {
          const movies = data.results.map((movie) =>
            this.theMovieDatabaseApiAdapter.movieApiServiceToMovie(
              movie,
              paginationParamsDto.language,
            ),
          );
          return { ...data, results: movies };
        }),
      );
    return lastValueFrom(movies$);
  }

  searchMovieByTitle(
    title: string,
    language: string,
  ): Promise<PaginatedMoviesDto> {
    const movies$ = this.httpService
      .get(`${this.baseUrl}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query: title,
        },
      })
      .pipe(
        map(({ data }) => {
          const movies = data.results.map((movie) =>
            this.theMovieDatabaseApiAdapter.movieApiServiceToMovie(
              movie,
              language,
            ),
          );
          return { ...data, results: movies };
        }),
      );
    return lastValueFrom(movies$);
  }

  get(movieId: number, language: string): Promise<Movie> {
    const movie$ = this.httpService
      .get(`${this.baseUrl}/movie/${movieId}`, {
        params: {
          api_key: this.apiKey,
          language,
        },
      })
      .pipe(
        map(({ data }) => {
          return this.theMovieDatabaseApiAdapter.movieApiServiceToMovie(
            data,
            language,
          );
        }),
      );
    return lastValueFrom(movie$);
  }
}
