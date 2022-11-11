/* eslint-disable prettier/prettier */
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export default class User {

  @ApiProperty()
  @Prop({ required: true })
  name: string

  @ApiProperty()
  @Prop({ required: true })
  email: string

  @ApiProperty()
  @Prop({ required: true })
  password: string

  @ApiProperty()
  @Prop({ required: true })
  phone: string

  @ApiProperty()
  @Prop({ required: true })
  role: string

  @ApiProperty()
  @Prop({ required: true })
  createdAt: Date

  @ApiProperty()
  @Prop({ required: true })
  updatedAt: Date

  @ApiProperty()
  @Prop({ required: true })
  deletedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User);

