import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { RoomEntityService } from './service/room.service';
import { PictureEntityService } from './service/picture.service';
import { SentryEntityService } from './service/sentry.service';

@Injectable()
export class EntityService {
  constructor(
    @Inject(RoomEntityService)
    public readonly room: RoomEntityService,
    @Inject(PictureEntityService)
    public readonly picture: PictureEntityService,
    @Inject(SentryEntityService)
    public readonly sentry: SentryEntityService,
  ) {}
}
