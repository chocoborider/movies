import { Injectable } from '@nestjs/common';
import { FavoriteMovie, Movie, MovieNote, User } from '../../core';
import {
  CreateMovieNoteDto,
  UpdateMovieNoteDto,
} from '../../core/dtos/create-movie-note.dto';
import { UpdateUserDto } from '../../core/dtos/create-user.dto';

@Injectable()
export class MovieFactoryService {
  createFavoriteMovie(movie, user): FavoriteMovie {
    const newFavoriteMovie = new FavoriteMovie();
    newFavoriteMovie.createdAt = new Date();
    newFavoriteMovie.movie = movie.movieApiId;
    newFavoriteMovie.user = user._id;

    return newFavoriteMovie;
  }
  createMovieNote(movie, user, createMovieNoteDto: CreateMovieNoteDto) {
    const newMovieNote = new MovieNote();
    newMovieNote.movie = movie.movieApiId;
    newMovieNote.user = user._id;
    newMovieNote.noteTitle = createMovieNoteDto.noteTitle;
    newMovieNote.description = createMovieNoteDto.description;
    newMovieNote.imageUrl = createMovieNoteDto.imageUrl;
    newMovieNote.createdAt = new Date();

    return newMovieNote;
  }
  updateMovieNote(updateMovieNoteDto: UpdateMovieNoteDto) {
    const movieNote = new MovieNote();
    movieNote.description = updateMovieNoteDto.description;
    movieNote.noteTitle = updateMovieNoteDto.noteTitle;
    movieNote.imageUrl = updateMovieNoteDto.imageUrl;

    return movieNote;
  }
}
