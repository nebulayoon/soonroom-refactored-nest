import { Module } from '@nestjs/common';
import { MysqlEntityModule } from '@database/mysql.module';
import { EntityServiceModule } from './database/main.module';
import { LoggerModule } from '@common/log/logger.module';

@Module({
  imports: [MysqlEntityModule, EntityServiceModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
