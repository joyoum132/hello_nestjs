import { Body, Controller, Get, Param, ParamData, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 데코레이터 패턴
  // body 와 param 은 req 안에서 모두 가져올 수 있지만 데코레이터를 사용해서 명시적으로 받을 수 있음
  @Get()
  getHello(
    @Req() req: Request,
    @Body() body: Body,
    @Param() param: { id: string; name: string },
  ): string {
    return this.appService.getHello();
  }
}
