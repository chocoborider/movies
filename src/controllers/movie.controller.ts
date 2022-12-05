import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MovieUseCases } from '../useCases/movie/movie-use-case';
import { PaginationParamsDto } from '../core/dtos/pagination-params.dto';
import {
  CreateMovieNoteDto,
  UpdateMovieNoteDto,
} from '../core/dtos/create-movie-note.dto';

@Controller('api/movie')
export class MovieController {
  constructor(private movieUseCases: MovieUseCases) {}

  @Get('/popular')
  async getPopularMovies(@Query() paginationParams: PaginationParamsDto) {
    return this.movieUseCases.getPopularMovies(paginationParams);
  }
  @Get('/favorite')
  async getFavoriteMovies(
    @Headers('auth_user') userId: string,
    @Query('language') language: string,
  ) {
    return this.movieUseCases.getFavoriteMovies(userId, language);
  }
  @Get('/title/:title')
  findByName(@Param('title') title: string, @Query() language: string) {
    return this.movieUseCases.searchMovieByTitle(title, language);
  }
  @Post('/:id/favorite')
  setFavoriteMovie(
    @Param('id') id: number,
    @Query('language') language: string,
    @Headers('auth_user') userId: string,
  ) {
    return this.movieUseCases.setFavoriteMovie(id, language, userId);
  }
  @Post('/:id/note')
  createMovieNote(
    @Param('id') id: number,
    @Query('language') language: string,
    @Headers('auth_user') userId: string,
    @Body() createMovieNoteDto: CreateMovieNoteDto,
  ) {
    return this.movieUseCases.createMovieNote(
      id,
      language,
      userId,
      createMovieNoteDto,
    );
  }
  @Patch('/note/:id')
  updateMovieNote(
    @Param('id') id: string,
    @Headers('auth_user') userId: string,
    @Body() updateMovieNoteDto: UpdateMovieNoteDto,
  ) {
    return this.movieUseCases.updateMovieNote(id, userId, updateMovieNoteDto);
  }
  @Get('/:movieId/notes')
  async getMovieNotesByMovie(
    @Param('movieId') movieId: number,
    @Headers('auth_user') userId: string,
    @Query('language') language: string,
  ) {
    return this.movieUseCases.getMovieNotesByMovie(movieId, userId, language);
  }
}
