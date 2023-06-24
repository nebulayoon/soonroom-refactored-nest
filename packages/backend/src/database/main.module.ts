import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBEntities } from './main.entities';
import { EntityService } from './main.service';
import { RoomService } from './service/room.service';
import { PictureService } from './service/picture.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(DBEntities)],
  providers: [EntityService, RoomService, PictureService],
  exports: [EntityService],
})
export class EntityServiceModule {}
