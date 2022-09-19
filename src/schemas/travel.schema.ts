/* eslint-disable */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TravelDocument = Travel & Document;

@Schema()
export class Travel {
    @Prop({ required: true })
    from: string

    @Prop()
    busNo: string

    @Prop({ required: true })
    destination: string

    @Prop({ require: true })
    n_passanger_allowed: number
    
    @Prop({ require: true })
    n_passanger_reg: number

    @Prop({ require: true })
    leaving_time: Date

    @Prop()
    company_name: string

    @Prop()
    driver: string

    @Prop({default: Date.now()})
    createdAt: Date
}

export const TravelSchema = SchemaFactory.createForClass(Travel)