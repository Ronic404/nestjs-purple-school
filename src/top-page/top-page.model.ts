import { Document, HydratedDocument } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export type TopPageDocument = HydratedDocument<TopPageModel>

export class HhData {
  @Prop()
  count: number

  @Prop()
  juniorSalary: number

  @Prop()
  middleSalary: number

  @Prop()
  seniorSalary: number
}

export class TopPageAdvantage {
  @Prop()
  title: string

  @Prop()
  description: string
}

@Schema({ timestamps: true })
export class TopPageModel extends Document {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory

  @Prop()
  secondCategory: string

  @Prop({ unique: true })
  alias: string

  @Prop()
  title: string

  @Prop()
  category: string

  @Prop(HhData)
  hh?: HhData

  @Prop([TopPageAdvantage])
  advantages: TopPageAdvantage[]

  @Prop()
  seoText: string

  @Prop()
  tagsTitle: string

  @Prop([String])
  tags: string[]
}

export const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel)
