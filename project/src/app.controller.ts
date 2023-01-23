import { Body, Controller, Get, Param, ParamData, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Req() req: Request,
    @Body() body: Body,
    @Param() param: { id: string; name: string },
  ): string {
    return this.appService.getHello();
  }
}
