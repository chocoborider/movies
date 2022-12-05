import { IGenericRepository } from './generic-repository.abstract';
import { FavoriteMovie, MovieNote, User } from '../entities';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract favoriteMovies: IGenericRepository<FavoriteMovie>;
  abstract movieNotes: IGenericRepository<MovieNote>;
}
