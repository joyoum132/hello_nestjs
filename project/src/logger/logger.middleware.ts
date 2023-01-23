import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    // finish 는 event 이름 : response 가 완료되었을때
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} || ${req.method} || ${req.originalUrl} || ${res.statusCode}`,
      );
    });
    next();
  }
}
