import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserService } from '@libs/database/service/user.service';

@Injectable()
export class EntityService {
  constructor(
    @Inject(UserService)
    public readonly user: UserService,
  ) {}
}
