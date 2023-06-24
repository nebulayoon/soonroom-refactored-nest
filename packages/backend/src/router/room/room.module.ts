import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

@Module({
  imports: [],
  exports: [RoomService],
  providers: [RoomService],
  controllers: [RoomController],
})
export class RoomModule {}
