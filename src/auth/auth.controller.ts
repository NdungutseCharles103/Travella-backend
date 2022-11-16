import { Body, Controller, Post, UseGuards, Req, Res } from "@nestjs/common";
import { ApiTags, } from "@nestjs/swagger";
import User from "../schemas/user.schema";
import { resHandler } from "../utils/resHandler";
import { AuthService } from "./auth.service";
import { Response } from "express";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() user: User, @Res({ passthrough: true }) res: Response) {
        try {
            const data: any = await this.authService.login(user);
            if (data.success) {
                res.cookie('access_token', data.token, { httpOnly: true, sameSite: false });
                return res.status(200).json({ message: "User logged in successfully", data: data.token, user: data.user });
            }
            res.status(400).json(data);
        } catch (error) {
            console.log(error);
            resHandler(error, res);
        }
    }

    @Post('register')
    async register(@Body() user: User, @Res() res: Response) {
        try {
            const data: any = await this.authService.register(user);
            if (data.success) {
                res.cookie('access_token', data.token, { httpOnly: true, sameSite: false });
                console.log('succusses');
                return res.status(201).json({ message: "User registered successfully", data: data.token, user: data.user });
            } else {
                console.log('failed');
                res.status(400).json(data);
            }
        } catch (error) {
            console.log('error');
            resHandler(error, res);
        }
    }
}
