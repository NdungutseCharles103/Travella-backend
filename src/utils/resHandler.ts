/* eslint-disable prettier/prettier */
import { HttpException } from '@nestjs/common';

export const resHandler = (error: any) => {
  if (error?._message) {
    throw new HttpException(error._message, 400);
  }else{
    throw new HttpException('Something went wrong', 500);
  }
};
