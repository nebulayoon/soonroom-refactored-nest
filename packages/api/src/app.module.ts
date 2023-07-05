import { Module } from '@nestjs/common';
import { UserModule } from './router/user.module';
import { EntityServiceModule } from './database/main.module';
import { MysqlEntityModule } from './database/mysql.module';
import { MLoggerModule } from './common/middleware/logger/logger.module';
import { LoggerModule } from './common/log/logger.module';
import { RabbitMQModule } from './database/rabbitmq.module';

@Module({
  imports: [
    EntityServiceModule,
    LoggerModule,
    MLoggerModule,
    RabbitMQModule,
    MysqlEntityModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
