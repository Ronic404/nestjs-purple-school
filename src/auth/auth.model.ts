import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ timestamps: true })
export class AuthModel extends Document {
  @Prop({ unique: true })
  email: string

  @Prop()
  passwordHash: string
}

export const AuthModelSchema = SchemaFactory.createForClass(AuthModel)
