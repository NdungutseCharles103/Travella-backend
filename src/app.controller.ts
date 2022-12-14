import { AuthService } from './auth/auth.service';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authSerService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
