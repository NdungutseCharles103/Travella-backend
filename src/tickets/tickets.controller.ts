import { FastifyReply } from 'fastify';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Res } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { resHandler } from '../utils/resHandler';
import { ApiTags } from '@nestjs/swagger';
import Ticket from '../schemas/ticket.schama';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) { }

  @Post()
  async create(@Body() ticket: Ticket, @Res() res: FastifyReply) {
    try {
      const newTicket = await this.ticketsService.create(ticket);
      res.status(201).send({ message: "Ticket created successfully", data: newTicket });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Get()
  async findAll(@Res() res: FastifyReply) {
    try {
      const tickets = await this.ticketsService.findAll();
      res.status(200).send({ message: " All Tickets ", data: tickets });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: FastifyReply) {
    try {
      const ticket = await this.ticketsService.findOne(id);
      res.status(200).send({ message: "Ticket", data: ticket });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() ticket: Ticket, @Res() res: FastifyReply) {
    try {
      const updatedTicket = await this.ticketsService.update(id, ticket);
      res.status(200).send({ message: "Ticket updated successfully", data: updatedTicket });
    } catch (error) {
      resHandler(error, res);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: FastifyReply) {
    try {
      const deletedTicket = await this.ticketsService.remove(id);
      res.status(202).send({ message: "Ticket deleted successfully", data: deletedTicket });
    } catch (error) {
      resHandler(error, res);
    }
  }

}
