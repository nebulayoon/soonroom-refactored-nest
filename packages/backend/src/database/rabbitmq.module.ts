import { Global, Module } from '@nestjs/common';
import { RabbitMQRepository } from './rabbitmq';
import { RabbitMQInit } from './rabbitmqInit';
import { SentryModule } from '@common/sentry/sentry.module';

@Global()
@Module({
  imports: [SentryModule],
  exports: [RabbitMQRepository, RabbitMQInit],
  providers: [RabbitMQRepository, RabbitMQInit],
})
export class RabbitMQModule {}
