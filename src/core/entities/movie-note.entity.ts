import { Movie } from './movie.entity';
import { User } from './user.entity';

export class MovieNote {
  movie: Movie;
  user: User;
  noteTitle: string;
  description: string;
  createdAt: Date;
  imageUrl?: string;
}
