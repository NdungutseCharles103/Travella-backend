import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';

export type TicketDocument = Ticket & Document;

@Schema()
export default class Ticket {
    @ApiProperty()
    @Prop({ required: true })
    busNo: number

    @ApiProperty()
    @Prop()
    expireAt: Date

    @ApiProperty()
    @Prop({ required: true })
    travelId: string

    @ApiProperty()
    @Prop({ required: true })
    userId: string

    @ApiProperty()
    @Prop({ required: true })
    seatNo: number

    @ApiProperty()
    @Prop({ required: true })
    price: number

    @ApiProperty()
    @Prop({ required: true, default: 'not used' })
    status: string

    @ApiProperty()
    @Prop({ required: true, default: Date.now })
    createdAt: Date

    @ApiProperty()
    @Prop({ required: true })
    updatedAt: Date

    @ApiProperty()
    @Prop({ required: true })
    deletedAt: Date

}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
