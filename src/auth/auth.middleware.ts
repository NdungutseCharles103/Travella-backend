import { FastifyRequest, FastifyReply } from 'fastify';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: FastifyRequest, res: FastifyReply, next: NextFunction) {
        console.log('Request...');
        console.log(req.cookies);
        next();
    }
}