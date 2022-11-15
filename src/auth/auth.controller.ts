import { Body, Controller, Post, UseGuards, Req, Res } from "@nestjs/common";
import { ApiTags, } from "@nestjs/swagger";
import User from "../schemas/user.schema";
import { resHandler } from "../utils/resHandler";
import { AuthService } from "./auth.service";
import { FastifyReply } from "fastify";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() user: User, @Res({ passthrough: true }) res: FastifyReply) {
        try {
            const data: any = await this.authService.login(user);
            if (data.success) {
                res.setCookie('access_token', data.token, { httpOnly: true });
               return res.status(200).send({ message: "User logged in successfully", data: data.token });
            }
            res.status(400).send(data);
        } catch (error) {
            console.log(error);
            resHandler(error, res);
        }
    }

    @Post('register')
    async register(@Body() user: User, @Res() res: FastifyReply) {
        try {
            const data: any = await this.authService.register(user);
            if (data.success) {
                res.setCookie('access_token', data.token, { httpOnly: true });
                console.log('succusses');
               return res.status(201).send({ message: "User registered successfully", data: data.token });
            } else {
                console.log('failed');
                res.status(400).send(data);
            }
        } catch (error) {
            console.log('error');
            resHandler(error, res);
        }
    }
}
