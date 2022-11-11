/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { resHandler } from '../utils/resHandler';
import { ApiTags } from '@nestjs/swagger';
import Ticket from '../schemas/ticket.schama';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) { }

  @Post()
  async create(@Body() ticket: Ticket) {
    try {
      const newTicket = await this.ticketsService.create(ticket);
      return new HttpException({ message: "Ticket created successfully", data: newTicket }, 201);
    } catch (error) {
      resHandler(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const tickets = await this.ticketsService.findAll();
      return new HttpException({ message: " All Tickets ", data: tickets }, 200);
    } catch (error) {
      resHandler(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const ticket = await this.ticketsService.findOne(id);
      return new HttpException({ data: ticket }, 200);
    } catch (error) {
      resHandler(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() ticket: Ticket) {
    try {
      const updatedTicket = await this.ticketsService.update(id, ticket);
      return new HttpException({ message: "Ticket updated successfully", data: updatedTicket }, 200);
    } catch (error) {
      resHandler(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deletedTicket = await this.ticketsService.remove(id);
      return new HttpException({ message: "Ticket deleted successfully", data: deletedTicket }, 200);
    } catch (error) {
      resHandler(error);
    }
  }

}
