import { Document, HydratedDocument } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type ProductDocument = HydratedDocument<ProductModel>

class ProductCharacteristic {
  @Prop()
  name: string

  @Prop()
  value: string
}

@Schema({ timestamps: true })
export class ProductModel extends Document {
  @Prop()
  image: string

  @Prop()
  title: string
  @Prop()
  price: number

  @Prop()
  oldPrice?: number

  @Prop()
  credit: number

  @Prop()
  description: string

  @Prop()
  advantages: string

  @Prop()
  disAdvantages: string

  @Prop([String])
  categories: string[]

  @Prop([String])
  tags: string[]

  @Prop([ProductCharacteristic, { _id: false }])
  characteristics: ProductCharacteristic[]
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel)
