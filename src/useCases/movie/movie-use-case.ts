import { Injectable } from '@nestjs/common';
import { FavoriteMovie, Movie } from '../../core';
import { IApiServices, IDataServices } from '../../core/abstracts';
import { PaginationParamsDto } from '../../core/dtos/pagination-params.dto';
import { MovieFactoryService } from './movie-factory.service';
import { PaginatedMoviesDto } from '../../core/dtos/paginated-movies.dto';
import {
  CreateMovieNoteDto,
  UpdateMovieNoteDto,
} from '../../core/dtos/create-movie-note.dto';

@Injectable()
export class MovieUseCases {
  constructor(
    private apiServices: IApiServices,
    private movieFactoryService: MovieFactoryService,
    private dataServices: IDataServices,
  ) {}

  async getPopularMovies(
    paginationParamsDto: PaginationParamsDto,
  ): Promise<PaginatedMoviesDto> {
    return this.apiServices.getPopularMovies(paginationParamsDto);
  }
  async searchMovieByTitle(
    title: string,
    language: string,
  ): Promise<PaginatedMoviesDto> {
    return this.apiServices.searchMovieByTitle(title, language);
  }
  async setFavoriteMovie(movieId: number, language: string, userId: string) {
    const user = await this.dataServices.users.getByCriteria({ id: userId });
    const movie = await this.apiServices.get(movieId, language);
    const favoriteMovie = this.movieFactoryService.createFavoriteMovie(
      movie,
      user,
    );

    return this.dataServices.favoriteMovies.create(favoriteMovie);
  }
  async getFavoriteMovies(
    userId: string,
    language: string,
  ): Promise<FavoriteMovie[]> {
    const user = await this.dataServices.users.getByCriteria({ id: userId });

    const favoriteMovies =
      await this.dataServices.favoriteMovies.getAllByCriteria({
        user: user._id,
      });

    return Promise.all(
      favoriteMovies.map(async (favoriteMovie) => {
        const movie = await this.apiServices.get(favoriteMovie.movie, language);
        return { ...favoriteMovie, movie };
      }),
    );
  }
  async createMovieNote(
    movieId: number,
    language: string,
    userId: string,
    createMovieNoteDto: CreateMovieNoteDto,
  ) {
    const user = await this.dataServices.users.getByCriteria({ id: userId });
    const movie = await this.apiServices.get(movieId, language);
    const newMovieNote = this.movieFactoryService.createMovieNote(
      movie,
      user,
      createMovieNoteDto,
    );

    return this.dataServices.movieNotes.create(newMovieNote);
  }
  async updateMovieNote(
    movieNoteId: string,
    language: string,
    updateMovieNoteDto: UpdateMovieNoteDto,
  ) {
    const movieNote = await this.movieFactoryService.updateMovieNote(
      updateMovieNoteDto,
    );
    return this.dataServices.movieNotes.updateById(movieNoteId, movieNote);
  }
  async getMovieNotesByMovie(
    movieId: number,
    userId: string,
    language: string,
  ): Promise<FavoriteMovie[]> {
    const user = await this.dataServices.users.getByCriteria({ id: userId });

    const movieNotes = await this.dataServices.movieNotes.getAllByCriteria({
      user: user._id,
      movie: movieId,
    });

    return Promise.all(
      movieNotes.map(async (movieNote) => {
        const movie = await this.apiServices.get(movieNote.movie, language);
        return { ...movieNote, movie };
      }),
    );
  }
}
