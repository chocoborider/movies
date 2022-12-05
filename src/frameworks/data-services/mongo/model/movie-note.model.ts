import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Movie } from '../../../../core';
import { User } from './user.model';
import mongoose from 'mongoose';

export type MovieNoteDocument = HydratedDocument<MovieNote>;

@Schema()
export class MovieNote {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  movie: Movie;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;
  @Prop()
  noteTitle: string;
  @Prop()
  description: string;
  @Prop()
  imageUrl: string;
  @Prop()
  createdAt: Date;
}

export const MovieNoteSchema = SchemaFactory.createForClass(MovieNote);
