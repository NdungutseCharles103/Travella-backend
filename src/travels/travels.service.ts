/* eslint-disable*/
import { Travel, TravelDocument } from './../schemas/travel.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
;

@Injectable()
export class TravelsService {
  constructor(@InjectModel('Travel') private TravelModel: Model<TravelDocument> ) {}

  create(travel: Travel) {
    return this.TravelModel.create(travel)
  }

  findAll() {
    return this.TravelModel.find()
  }

  findOne(id: string) {
    return this.TravelModel.findOne({id: id})
  }

  update(id: string, updateTravel: Travel) {
    return this.TravelModel.findByIdAndUpdate(id, updateTravel)
  }

  remove(id: string) {
    return this.TravelModel.findByIdAndDelete(id)
  }
}
