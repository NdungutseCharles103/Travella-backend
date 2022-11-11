/* eslint-disable prettier/prettier */
import { HttpException } from '@nestjs/common';
import { resHandler } from './../utils/resHandler';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import User from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: User) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    // const hashedPassword = await hash(user.password);
    user.password = hashedPassword;
    try {
      const newuser = await this.usersService.create(user);
      return new HttpException({ message: "User created successfully", data: newuser}, 201);
    } catch (error) {
      resHandler(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return new HttpException({ message: " All Users ",data: users}, 200);
    } catch (error) {
      resHandler(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(id);
      return new HttpException({data: user}, 200);
    } catch (error) {
      resHandler(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: User) {
    try {
      const updatedUser = await this.usersService.update(id, user);
      return new HttpException(updatedUser, 200);
    } catch (error) {
      resHandler(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deletedUser = await this.usersService.remove(id);
      return new HttpException(deletedUser, 200);
    } catch (error) {
      resHandler(error);
    }
  }
}
