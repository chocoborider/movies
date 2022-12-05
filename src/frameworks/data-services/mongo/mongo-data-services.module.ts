import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FavoriteMovie,
  FavoriteMovieSchema,
  MovieNote,
  MovieNoteSchema,
  User,
  UserSchema,
} from './model';
import { IDataServices } from '../../../core/abstracts';
import { MongoDataServices } from './mongo-data-services.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: MovieNote.name, schema: MovieNoteSchema },
    ]),
    MongooseModule.forFeature([
      { name: FavoriteMovie.name, schema: FavoriteMovieSchema },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
