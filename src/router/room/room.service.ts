import { Injectable } from '@nestjs/common';
import { EntityService } from '@database/main.service';
import { Room } from '@database/entity/room.entity';

@Injectable()
export class RoomService {
  constructor(private readonly entityService: EntityService) {}

  async create(room: Partial<Room>) {
    try {
      const result = await this.entityService.room.create(room);
      return result;
    } catch (e) {
      logger.error(`[RoomService create] ${e.message}`, e.stack, e.context);
      return undefined;
    }
  }

  async readRooms() {
    try {
      const result = await this.entityService.room.findAll();
      return result;
    } catch (e) {
      logger.error(`[RoomService readRooms] ${e.message}`, e.stack, e.context);
      return undefined;
    }
  }

  async readRoomPictures(id: number) {
    try {
      const result = await this.entityService.picture.findOne(id, {
        relations: ['roomId'],
      });

      return result;
    } catch (e) {
      logger.error(
        `[RoomService readRoomPictures] ${e.message}`,
        e.stack,
        e.context,
      );
      return undefined;
    }
  }
}
