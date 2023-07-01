import { Module } from '@nestjs/common';
import { UserModule } from './router/user.module';
import { EntityServiceModule } from './database/main.module';
import { MysqlEntityModule } from './database/mysql.module';

@Module({
  imports: [EntityServiceModule, MysqlEntityModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
