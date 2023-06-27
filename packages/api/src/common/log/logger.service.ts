import { forwardRef, Inject, Injectable, LoggerService } from '@nestjs/common';
import { TimeService } from '../time/time.service';
import { RabbitMQRepository } from 'src/database/rabbitmq';
import * as winston from 'winston';

@Injectable()
export class CustomLoggerService implements LoggerService {
  private readonly logger: winston.Logger;

  constructor(private readonly timeService: TimeService) {
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
              } | STACK: ${obj.stack} | CONTEXT: ${obj.context}`;
            }),
          ),
        }),
      ],
    });

    globalThis.logger = this;
  }

  error(message: string, stack?: string, context?: any) {
    const args = { message, stack, context };
    this.logger.error(args);

    const rabbitmq = new RabbitMQRepository();
    try {
      rabbitmq.connect('amqp://soonroom:1234@192.168.0.13:5672/');
      rabbitmq.publish('logmq', args);
    } catch (e) {
      console.error(e);
    }
  }

  log(message: string, context?: any) {
    this.logger.info({ message, context });
  }

  warn(message: string, context?: any) {
    this.logger.warn({ message, context });
  }

  debug(message: string, context?: any) {
    this.logger.debug({ message, context });
  }

  verbose(message: string, context?: any) {
    this.logger.verbose({ message, context });
  }
}
