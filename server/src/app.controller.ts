import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(ConfigService)
  private configService: ConfigService

  @Get('/test')
  getHello(): string {
    return JSON.stringify({
      data: this.appService.getHello(),
      env: process.env,
      config: this.configService.get('aaa.bbb.ccc')
    });
  }
}
