import { FastifyReply } from 'fastify';
import { FastifyRequest } from 'fastify';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './../auth/guards/local-auth.guard';
import { responses } from './../utils/index';
/* eslint-disable prettier/prettier */
import { HttpException, UseGuards, Req, Res } from '@nestjs/common';
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
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    try {
      const users = await this.usersService.findAll();
      console.log(users);
      // return new HttpException({ message: " All Users ", data: users }, 200);
      res.status(200).send({ message: " All Users ", data: users });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a user that exists in the database',
    type: Number
  })
  @ApiResponse({...responses.fetched ,  type: User})
  @ApiResponse(responses.fetched)
  async findOne(@Param('id') id: string, @Res() res: FastifyReply) {
    try {
      const user = await this.usersService.findOne(id);
      res.status(200).send({ message: "User", data: user });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: User, @Res() res: FastifyReply) {
    try {
      const updatedUser = await this.usersService.update(id, user);
      res.status(200).send({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: FastifyReply)  {
    try {
      const deletedUser = await this.usersService.remove(id);
      res.status(202).send({ message: "User deleted successfully", data: deletedUser });
    } catch (error) {
      resHandler(error, res);
    }
  }
}
