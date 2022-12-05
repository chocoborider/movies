import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core/abstracts/data-services.abstract';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  FavoriteMovie,
  FavoriteMovieDocument,
  MovieNote,
  MovieNoteDocument,
  User,
  UserDocument,
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoGenericRepository<User>;
  movieNotes: MongoGenericRepository<MovieNote>;
  favoriteMovies: MongoGenericRepository<FavoriteMovie>;

  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
    @InjectModel(MovieNote.name)
    private movieNoteRepository: Model<MovieNoteDocument>,
    @InjectModel(FavoriteMovie.name)
    private favoriteMovieRepository: Model<FavoriteMovieDocument>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.userRepository);
    this.movieNotes = new MongoGenericRepository<MovieNote>(
      this.movieNoteRepository,
      ['user'],
    );
    this.favoriteMovies = new MongoGenericRepository<FavoriteMovie>(
      this.favoriteMovieRepository,
      ['user'],
    );
  }
}
