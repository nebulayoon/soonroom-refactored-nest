import { Injectable } from '@nestjs/common';
import { EntityService } from '@database/main.service';

@Injectable()
export class RoomService {
  constructor(private readonly entityService: EntityService) {}

  async readLocation() {}
}
