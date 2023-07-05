import { Global, Module } from '@nestjs/common';
import { RabbitMQRepository } from './rabbitmq';
import { RabbitMQInit } from './rabbitmqInit';

@Global()
@Module({
  imports: [],
  exports: [RabbitMQRepository, RabbitMQInit],
  providers: [RabbitMQRepository, RabbitMQInit],
})
export class RabbitMQModule {}
