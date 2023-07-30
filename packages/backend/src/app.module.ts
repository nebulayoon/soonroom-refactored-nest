import { Module } from '@nestjs/common';
import { MysqlEntityModule } from '@libs/database/mysql/mysql.module';
import { EntityServiceModule } from './database/main.module';
import { LoggerModule } from '@libs/common/log/logger.module';
import { RoomModule } from './router/room/room.module';
import { SentryModule } from './common/sentry/sentry.module';
import { RabbitMQModule } from '@libs/database/rabbitmq/rabbitmq.module';
import { MLoggerModule } from '@libs/common/middleware/logger/logger.module';

@Module({
  imports: [
    MysqlEntityModule,
    EntityServiceModule,
    LoggerModule,
    MLoggerModule,
    RabbitMQModule,
    RoomModule,
    SentryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
