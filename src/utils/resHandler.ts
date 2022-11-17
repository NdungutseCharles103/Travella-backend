import { Request, Response } from 'express';
/* eslint-disable prettier/prettier */

export const resHandler = (error: any, res: Response, _req?: Request) => {
  if (error?._message)
    return res.status(400).json({ message: error._message });
  else
   return res.status(400).json({ message: error.message ?? 'Something went wrong!' });
};
