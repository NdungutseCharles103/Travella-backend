import { responses } from './../utils/index';
/* eslint-disable prettier/prettier */
import { Req, Res, UseGuards } from '@nestjs/common';
import { resHandler } from './../utils/resHandler';
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
import { Response, Request } from 'express'
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards()
  @Get('allUsers')
  async findAll(@Req() req: Request, @Res() res: Response) {
    console.log('req.user', req.cookies.token);
    try {
      const users = await this.usersService.findAll();
      console.log(users);
      // return new HttpException({ message: " All Users ", data: users }, 200);
      res.status(200).json({ message: " All Users ", data: users });
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
  @ApiResponse({ ...responses.fetched, type: User })
  @ApiResponse(responses.fetched)
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.usersService.findOne(id);
      res.status(200).json({ message: "User", data: user });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: User, @Res() res: Response) {
    try {
      const updatedUser = await this.usersService.update(id, user);
      res.status(200).json({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const deletedUser = await this.usersService.remove(id);
      res.status(202).json({ message: "User deleted successfully", data: deletedUser });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Get('user/me')
  async me(@Req() req: Request | any, @Res() res: Response) {
    console.log("userReq", req.user);
    const id = req.user?.sub ?? null;
    try {
      const user = await this.usersService.findOne(id);
      return res.status(200).json({ message: "User", data: user });
    } catch (error) {
      console.log(error);
      resHandler(error, res);
    }
  }
}
