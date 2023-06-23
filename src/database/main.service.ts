import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { RoomService } from './service/room.service';
import { PictureService } from './service/picture.service';

@Injectable()
export class EntityService {
  constructor(
    @Inject(RoomService)
    public readonly room: RoomService,
    @Inject(PictureService)
    public readonly picture: PictureService,
  ) {}
}
