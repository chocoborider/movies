import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.model';
import { Movie } from '../../../../core';

export type FavoriteMovieDocument = HydratedDocument<FavoriteMovie>;

@Schema()
export class FavoriteMovie {
  @Prop()
  userId: string;

  @Prop()
  createdAt: Date;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  movie: Movie;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;
}

export const FavoriteMovieSchema = SchemaFactory.createForClass(FavoriteMovie);
