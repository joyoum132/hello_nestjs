import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// 같은 모듈 내에서만 의존성 주입 가능. 외부 모듈에서 사용시 exports 필요하다.
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
