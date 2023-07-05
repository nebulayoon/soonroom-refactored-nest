import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQRepository {
  private readonly RECONNECT_TIMEOUT_MS = 5000;
  private channel: amqp.Channel;
  private connection: amqp.Connection;

  async connect(url: string): Promise<void> {
    try {
      this.connection = await amqp.connect(url);
      this.channel = await this.connection.createChannel();

      this.connection.on('close', () => this.reconnect(url));

      process.on('SIGINT', async () => {
        await this.close();
        process.exit(0);
      });

      process.on('SIGTERM', async () => {
        await this.close();
        process.exit(0);
      });
    } catch (err) {
      console.error('RabbitMQ connection error:', err);
      setTimeout(() => this.connect(url), this.RECONNECT_TIMEOUT_MS);
    }
  }

  private async reconnect(url: string): Promise<void> {
    if (this.connection) {
      this.connection.removeAllListeners();
      this.connection = null;
    }

    if (this.channel) {
      this.channel.removeAllListeners();
      this.channel = null;
    }

    await this.connect(url);
  }

  async publish(queueName: string, message: object): Promise<void> {
    const messageStringify = JSON.stringify(message);
    if (!this.channel) {
      throw new Error('RabbitMQ channel not available');
    }
    await this.channel.assertQueue(queueName, { durable: true });
    this.channel.sendToQueue(queueName, Buffer.from(messageStringify), {
      persistent: true,
    });
  }

  async consume(
    queueName: string,
    callback: (message: object) => void,
  ): Promise<void> {
    if (!this.channel) {
      throw new Error('RabbitMQ channel not available');
    }

    // this.channel.prefetch(1);
    await this.channel.consume(queueName, (msg) => {
      if (msg) {
        try {
          const message = JSON.parse(msg.content.toString());
          callback(message);
          this.channel.ack(msg);
        } catch (err) {
          console.error('RabbitMQ consume callback error:', err);
          this.channel.nack(msg);
        }
      }
    });
  }

  async close(): Promise<void> {
    if (this.channel) {
      await this.channel.close();
      this.channel = null;
    }

    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
  }
}
