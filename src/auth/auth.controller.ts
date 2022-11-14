import { Body, Controller, HttpException, Post, UseGuards, Req, Res } from "@nestjs/common";
import { ApiTags, } from "@nestjs/swagger";
import User from "../schemas/user.schema";
import { resHandler } from "../utils/resHandler";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
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
                return new HttpException({ message: "User logged in successfully", data: data.token }, 202);
            }
            return new HttpException(data, 400)
        } catch (error) {
            console.log(error);
            resHandler(error);
        }
    }

    @Post('register')
    async register(@Body() user: User, @Res() res: FastifyReply) {
        try {
            const data: any = await this.authService.register(user);
            if (data.success) {
                res.setCookie('access_token', data.token, { httpOnly: true });
                return new HttpException({ message: "User registered succesrsfully", data: data }, 201);
            }
            return new HttpException(data, 400)
        } catch (error) {
            resHandler(error);
        }
    }
}
