import { Module } from '@nestjs/common';
import { MysqlEntityModule } from '@database/mysql.module';
import { EntityServiceModule } from './database/main.module';
import { LoggerModule } from '@common/log/logger.module';
import { RoomModule } from './router/room/room.module';

@Module({
  imports: [MysqlEntityModule, EntityServiceModule, LoggerModule, RoomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
