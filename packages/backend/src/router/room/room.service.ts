import { Injectable } from '@nestjs/common';
import { EntityService } from '@database/main.service';
import { Room } from '@database/entity/room.entity';
import { Picture } from '@database/entity/picture.entity';

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

  async uploadPictures(roomId: number, files: Array<Express.Multer.File>) {
    try {
      const pictures = files.map((row) => {
        return {
          roomId: roomId,
          originalName: row.originalname,
          fileName: row.filename,
          path: row.path,
          type: row.mimetype,
        } as Picture;
      });

      return await this.entityService.picture.createPictures(pictures);
    } catch (e) {
      logger.error(
        `[RoomService uploadPictures] ${e.message}`,
        e.stack,
        e.context,
      );
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
