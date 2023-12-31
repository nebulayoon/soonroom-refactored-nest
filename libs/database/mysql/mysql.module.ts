import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBEntities } from '@database/main.entities';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'soonroom',
        password: '1234',
        database: 'soonroom',
        entities: DBEntities,
        synchronize: true,
      }),
    }),
  ],
})
export class MysqlEntityModule {}
