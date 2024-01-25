import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ReviewService } from './review.service'
import { TelegramModule } from 'src/telegram/telegram.module'
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
    TelegramModule,
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
