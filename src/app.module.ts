/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost/nestjs'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
