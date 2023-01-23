import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';

//AppModule 에서 catService 를 사용하기 위해 cats.module 에서 export 한 상황 (public 화)
// 이때 providers 에 CatsService 를 지정할수도 있고 imports 에 CatsModule 를 지정할수도 있다.
// providers 에는 서비스, 레포, 게이드웨이 등등 다양한 종류가 올 수 있으니 imports 에 선언하는것을 권장한다. - 단일책임원칙 위배
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
