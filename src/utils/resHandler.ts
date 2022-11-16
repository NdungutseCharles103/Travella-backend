import { Request, Response } from 'express';
/* eslint-disable prettier/prettier */

export const resHandler = (error: any, res: Response, _req?: Request) => {
  if (error?._message) {
    res.status(400).json({ message: error._message });
  } else {
    res.status(400).json({ message: error.message ?? 'Something went wrong!' });
  }
};
