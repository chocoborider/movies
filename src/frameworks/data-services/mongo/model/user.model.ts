import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true })
  id: string;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
