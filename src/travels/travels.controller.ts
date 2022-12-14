import { Response } from 'express';
import { Travel } from './../schemas/travel.schema';
/* eslint-disable*/
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Res } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { resHandler } from '../utils/resHandler';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('travels')
@Controller('travels')
export class TravelsController {
  constructor(private readonly travelsService: TravelsService) { }

  @Post()
  async create(@Body() travel: Travel, @Res() res: Response) {
    try {
      const newtravel = await this.travelsService.create(travel);
      return new HttpException({ message: "travel created successfully", data: newtravel }, 201);
    } catch (error) {
      resHandler(error, res)
    }
  }

  @Get()
  async findAll() {
    return this.travelsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.travelsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTrave: Travel) {
    return this.travelsService.update(id, updateTrave);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.travelsService.remove(id);
  }
}
