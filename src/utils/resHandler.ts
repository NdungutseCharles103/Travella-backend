import { FastifyReply } from 'fastify';
/* eslint-disable prettier/prettier */
import { HttpException } from '@nestjs/common';

export const resHandler = (error: any, res: FastifyReply) => {
  if (error?._message) {
    res.status(400).send({ message: error._message });
  }else{
    res.status(400).send({ message: error.message??'Something went wrong!' });
  }
};
