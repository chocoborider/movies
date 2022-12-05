import { Movie } from './movie.entity';
import { User } from './user.entity';

export class FavoriteMovie {
  movie: Movie;
  user: User;
  createdAt: Date;
}
