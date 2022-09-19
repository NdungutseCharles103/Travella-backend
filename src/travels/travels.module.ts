/* eslint-disable */
import { TravelSchema } from './../schemas/travel.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Travel',
      schema: TravelSchema
    }]),
  ],
  controllers: [TravelsController],
  providers: [TravelsService],
})

export class TravelsModule {}
