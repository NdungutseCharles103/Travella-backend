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
  names: string

  @ApiProperty()
  @Prop({ required: true })
  email: string

  @ApiProperty()
  @Prop({ required: true })
  password: string

  @ApiProperty()
  @Prop()
  phone: string

  @ApiProperty()
  @Prop({ required: true, default: 'traveller' })
  role: string

  @ApiProperty()
  @Prop({ default: [] })
  savedPlaces: any[]

  @ApiProperty()
  @Prop({ default: [] })
  savedHotels: any[]

  @ApiProperty()
  @Prop({ required: true, default: Date.now() })
  createdAt: Date

  @ApiProperty()
  @Prop({ required: true, default: Date.now() })
  updatedAt: Date

  @ApiProperty()
  @Prop()
  deletedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User);

