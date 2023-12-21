import { Document, HydratedDocument } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type ReviewDocument = HydratedDocument<UserModel>

@Schema({ timestamps: true })
export class UserModel extends Document {
  @Prop({ unique: true })
  email: string

  @Prop()
  passwordHash: string
}

export const UserModelSchema = SchemaFactory.createForClass(UserModel)
