import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Ticket, { TicketDocument } from '../schemas/ticket.schama';

@Injectable()
export class TicketsService {
  constructor(@InjectModel('Ticket') private TicketModel: Model<TicketDocument>) { }

  async create(ticket: Ticket) {
    const newTicket = new this.TicketModel(ticket);
    return await newTicket.save();
  }

  async findAll() {
    return await this.TicketModel.find();
  }

  async findOne(id: string) {
    return await this.TicketModel.findById(id);
  }

  async update(id: string, ticket: Ticket) {
    return await this.TicketModel.findByIdAndUpdate(id, ticket, { new: true });
  }

  async remove(id: string) {
    return await this.TicketModel.findByIdAndDelete(id);
  }

}
