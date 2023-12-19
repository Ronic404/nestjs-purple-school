import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ReviewService } from './review.service'
import { ReviewController } from './review.controller'
import { ReviewModel, ReviewModellSchema } from './review.model'

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: ReviewModel.name,
        schema: ReviewModellSchema,
      },
    ]),
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
