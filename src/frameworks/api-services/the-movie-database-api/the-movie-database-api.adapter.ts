import { Movie } from '../../../core';
import { MovieApiServiceDto } from '../../../core/dtos/movie-api-service.dto';

export class TheMovieDatabaseApiAdapter {
  movieApiServiceToMovie(
    movieApiServiceDto: MovieApiServiceDto,
    language: string,
  ): Movie {
    const newMovie = new Movie();
    newMovie.movieIMDBId = movieApiServiceDto.imdb_id;
    newMovie.movieApiId = movieApiServiceDto.id;
    newMovie.originalLanguage = movieApiServiceDto.original_language;
    newMovie.language = language;
    newMovie.title = movieApiServiceDto.title;
    newMovie.overview = movieApiServiceDto.overview;
    newMovie.popularity = movieApiServiceDto.popularity;
    newMovie.posterPath = movieApiServiceDto.poster_path;
    newMovie.releaseDate = movieApiServiceDto.release_date;
    newMovie.video = movieApiServiceDto.video;
    newMovie.voteAverage = movieApiServiceDto.vote_average;
    newMovie.voteCount = movieApiServiceDto.vote_count;
    if (movieApiServiceDto.genres) {
      newMovie.genres = movieApiServiceDto.genres.map(({ name }) => name);
    }

    return newMovie;
  }
}
