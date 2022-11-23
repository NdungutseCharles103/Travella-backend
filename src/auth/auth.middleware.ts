import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        console.log(req.headers);
        console.log(req.cookies.access_token);
        const access_token = req.headers.authorization;
        try {
            if (access_token) {
                const user = await this.authService.verify(access_token);
                req.user = user;
                return next();
            }
            return res.status(401).json({ message: 'Unauthorized' });
        } catch (error) {
            console.log(error);
           return res.status(400).json({ message: 'Invalid token' });
        }
    }
}