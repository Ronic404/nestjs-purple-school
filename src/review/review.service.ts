import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'

import { CreateReviewDto } from './dto/create-review.dto'
import { ReviewDocument, ReviewModel } from './review.model'

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: CreateReviewDto): Promise<ReviewDocument> {
    return (await this.reviewModel.create(dto)).save()
  }

  async delete(id: string): Promise<any> {
    return this.reviewModel.findByIdAndDelete(id).exec()
  }

  async findByProductId(productId: string): Promise<ReviewDocument[]> {
    return this.reviewModel
      .find({ productId: new Types.ObjectId(productId) })
      .exec()
  }

  async deleteByProductId(
    productId: string,
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return this.reviewModel
      .deleteMany({ productId: new Types.ObjectId(productId) })
      .exec()
  }
}
