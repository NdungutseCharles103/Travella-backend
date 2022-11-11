/* eslint-disable */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type TravelDocument = Travel & Document;

@Schema()
export class Travel {
    @ApiProperty()
    @Prop({ required: true })
    from: string

    @ApiProperty()
    @Prop()
    busNo: string

    @ApiProperty()
    @Prop({ required: true })
    destination: string

    @ApiProperty()
    @Prop({ require: true })
    n_passanger_allowed: number
    
    @ApiProperty()
    @Prop({ require: true })
    n_passanger_reg: number

    @ApiProperty()
    @Prop({ require: true })
    leaving_time: Date

    @ApiProperty()
    @Prop()
    company_name: string

    @ApiProperty()
    @Prop()
    driver: string

    @ApiProperty()
    @Prop({default: Date.now()})
    createdAt: Date
}

export const TravelSchema = SchemaFactory.createForClass(Travel)