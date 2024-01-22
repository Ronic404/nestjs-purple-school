import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { AppService } from './app.service'
import { AppController } from './app.controller'

import { AuthModule } from './auth/auth.module'
import { FilesModule } from './files/files.module'
import { UsersModule } from './users/users.module'
import { JwtStrategy } from './auth/strategies/jwt.strategy'
import { ReviewModule } from './review/review.module'
import { ProductModule } from './product/product.module'
import { TopPageModule } from './top-page/top-page.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost/test'),
    AuthModule,
    UsersModule,
    ReviewModule,
    ProductModule,
    TopPageModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
