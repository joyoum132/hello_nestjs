import { Body, Controller, Get, Param, ParamData, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  // 데코레이터 패턴
  // body 와 param 은 req 안에서 모두 가져올 수 있지만 데코레이터를 사용해서 명시적으로 받을 수 있음
  @Get()
  getHello(): string {
    return this.catsService.getAllCats();
  }
}
