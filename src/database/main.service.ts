import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { RoomService } from './service/room.service';

@Injectable()
export class EntityService {
  constructor(
    @Inject(RoomService)
    public readonly room: RoomService,
  ) {}
}
