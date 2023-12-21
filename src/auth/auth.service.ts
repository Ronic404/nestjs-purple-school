import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { genSaltSync, hashSync } from 'bcryptjs'

import { AuthDto } from './dto/auth.dto'
import { ReviewDocument, UserModel } from './user.model'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<ReviewDocument>,
  ) {}

  async createUser(dto: AuthDto) {
    const salt = genSaltSync(10)
    const newUser = new this.userModel({
      email: dto.login,
      passwordHash: hashSync(dto.password, salt),
    })
    return newUser.save()
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email }).exec()
  }
}
