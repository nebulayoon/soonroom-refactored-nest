import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityService } from './main.service';
import { UserService } from './service/user.service';
import { DBEntities } from './main.entities';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(DBEntities)],
  providers: [EntityService, UserService],
  exports: [EntityService],
})
export class EntityServiceModule {}
