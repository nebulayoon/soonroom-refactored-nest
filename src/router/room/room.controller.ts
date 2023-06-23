import { Controller, Get, HttpStatus } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from '@database/entity/room.entity';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async readRooms() {
    try {
      const result = await this.roomService.readRooms();
      if (result === undefined) {
        return { statusCode: HttpStatus.BAD_REQUEST, message: ['fail'] };
      }
      return {
        statusCode: HttpStatus.OK,
        message: ['success'],
        result: result,
      };
    } catch (e) {
      logger.error(`[Room Controller] ${e.message}`, e.stack, e.context);
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: ['조회 실패'],
      };
    }
  }
}
