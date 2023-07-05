import { forwardRef, Inject, Injectable, LoggerService } from '@nestjs/common';
import { EntityService } from 'src/database/main.service';
import { TimeService } from '../time/time.service';
import * as winston from 'winston';

@Injectable()
export class CustomLoggerService implements LoggerService {
  private readonly logger: winston.Logger;

  constructor(
    @Inject(EntityService)
    private readonly entityService: EntityService,
    private readonly timeService: TimeService,
  ) {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            winston.format.printf((obj) => {
              return `${obj.level}: [${this.timeService.getTime(new Date())}] ${
                obj.message
              } ${obj.stack ? '| STACK:' + obj.stack : ''} ${
                obj.context ? '| CONTEXT:' + obj.context : ''
              }`;
            }),
          ),
        }),
      ],
    });

    globalThis.logger = this;
  }

  error(message: string, stack?: string, context?: any) {
    const time = this.timeService.getTime(new Date());

    this.logger.error({ message, stack, context });
  }

  log(message: string, context?: any) {
    const time = this.timeService.getTime(new Date());

    this.logger.info({ message, context });
  }

  warn(message: string, context?: any) {
    const time = this.timeService.getTime(new Date());

    this.logger.warn({ message, context });
  }

  debug(message: string, context?: any) {
    this.logger.debug({ message, context });
  }

  verbose(message: string, context?: any) {
    this.logger.verbose({ message, context });
  }
}
