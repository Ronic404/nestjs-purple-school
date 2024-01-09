import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { TopPageController } from './top-page.controller'
import { TopPageModel, TopPageModelSchema } from './top-page.model'
import { TopPageService } from './top-page.service'

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([
      {
        name: TopPageModel.name,
        schema: TopPageModelSchema,
      },
    ]),
  ],
  providers: [TopPageService],
})
export class TopPageModule {}
