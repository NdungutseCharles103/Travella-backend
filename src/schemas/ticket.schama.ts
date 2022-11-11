/* eslint-disable prettier/prettier */
import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export default class Ticket {
    @Prop({ required: true})
    busNo: number

    
}
