import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { FilesInterceptor } from '@nestjs/platform-express';

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

  @Get('pictures')
  async readRoomPictures(@Param('id') id: number) {
    try {
      const result = await this.roomService.readRoomPictures(id);
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

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadRoomPictures(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body('roomId') roomId: number,
  ) {
    try {
      const result = await this.roomService.uploadPictures(roomId, files);
      if (result === undefined) {
        return { statusCode: HttpStatus.BAD_REQUEST, message: ['업로드 실패'] };
      }
      return {
        statusCode: HttpStatus.OK,
        message: ['success'],
        result: result,
      };
    } catch (e) {
      return { statusCode: HttpStatus.BAD_REQUEST, message: ['업로드 실패'] };
    }
  }
}
