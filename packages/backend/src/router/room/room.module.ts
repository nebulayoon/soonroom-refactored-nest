import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
  ],
  exports: [RoomService],
  providers: [RoomService],
  controllers: [RoomController],
})
export class RoomModule {}
