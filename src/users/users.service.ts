import { UserModel } from './../schemas/user.schema';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import User from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(user: User) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findOne({ _id: id });
  }

  async update(id: string, user: User) {
    return this.userModel.updateOne({ _id: id }, user);
  }

  async remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}