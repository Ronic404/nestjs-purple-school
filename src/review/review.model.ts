import { HydratedDocument, Types } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

export type ReviewDocument = HydratedDocument<ReviewModel>

@Schema({ timestamps: true })
export class ReviewModel {
  @Prop()
  name: string

  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  rating: number

  @Prop()
  productId: Types.ObjectId
}

export const ReviewModellSchema = SchemaFactory.createForClass(ReviewModel)
