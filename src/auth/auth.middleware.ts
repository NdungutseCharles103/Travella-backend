import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { FastifyRequest, FastifyReply } from 'fastify';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) { }

    async use(req: FastifyRequest | any, res: FastifyReply, next: NextFunction) {
        console.log(req.cookies);
        const access_token = req.headers.authorization;
        try {
            if (access_token) {
                const user = await this.authService.verify(access_token);
                req.user = user;
               return next();
            }
            return res.status(401).send({ message: 'Unauthorized' });
        } catch (error) {
            console.log(error);
            next()
            res.status(400).send({ message: 'Invalid token' });
        }
    }
}