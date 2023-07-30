import { Module } from '@nestjs/common';
import { UserModule } from './router/user/user.module';
import { EntityServiceModule } from './database/main.module';
import { MysqlEntityModule } from '@libs/database/mysql/mysql.module';
import { MLoggerModule } from '@libs/common/middleware/logger/logger.module';
import { LoggerModule } from '@libs/common/log/logger.module';
import { RabbitMQModule } from '@libs/database/rabbitmq/rabbitmq.module';
import { RedisEntityModule } from '@libs/database/redis/redis.module';

@Module({
  imports: [
    EntityServiceModule,
    LoggerModule,
    MLoggerModule,
    RabbitMQModule,
    RedisEntityModule,
    MysqlEntityModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
