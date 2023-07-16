import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { JwtDto } from '@router/user/dto/user.dto';

type TRequestWithUser = Request & { user: JwtDto };

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as TRequestWithUser;
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
