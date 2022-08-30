/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from '../schemas/cat.schema';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() cat: Cat): Promise<any> {
    console.log(cat);
    return this.catsService.create(cat);
  }

  @Get(':id')
  async findOne(id: string): Promise<any> {
    return this.catsService.findOne(id);
  }
}
