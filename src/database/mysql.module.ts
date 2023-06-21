import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'test',
        password: 'test',
        database: 'soonroom',
        synchronize: true,
      }),
    }),
  ],
})
export class MysqlEntityModule {}
