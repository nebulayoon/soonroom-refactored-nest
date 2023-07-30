import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitMQRepository } from './rabbitmq';

@Injectable()
export class RabbitMQInit implements OnModuleInit {
  constructor(private readonly rabbitMQRepository: RabbitMQRepository) {}

  async onModuleInit() {
    try {
      await this.rabbitMQRepository.connect(
        'amqp://soonroom:1234@rabbitmq:5672/',
      );
    } catch (e) {
      console.error(e);
    }
  }
}
