import { Module } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisRepository } from './redis';

@Module({
  exports: [RedisRepository],
  providers: [
    {
      provide: 'REDIS',
      useValue: new Redis({ host: '192.168.0.13', port: 6379 }),
    },
    RedisRepository,
  ],
})
export class RedisEntityModule {}
