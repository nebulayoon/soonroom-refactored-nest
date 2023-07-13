import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitMQRepository } from './rabbitmq';
import { SentryService } from '@common/sentry/sentry.service';

@Injectable()
export class RabbitMQInit implements OnModuleInit {
  constructor(
    private readonly rabbitMQRepository: RabbitMQRepository,
    private readonly sentryService: SentryService,
  ) {}

  async onModuleInit() {
    try {
      await this.rabbitMQRepository.connect(
        'amqp://soonroom:1234@rabbitmq:5672/',
      );
      await this.rabbitMQRepository.consume(
        'logmq',
        this.sentryService.sendException,
      );
    } catch (e) {
      console.error(e);
    }
  }
}
