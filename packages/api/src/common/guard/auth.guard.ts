import {
  CanActivate,
  ExecutionContext,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Request } from 'express';
import { JwtDto } from 'src/router/user/dto/user.dto';
import { LongWithoutOverridesClass } from 'typeorm/driver/mongodb/bson.typings';

export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    try {
      const request = ctx.switchToHttp().getRequest() as Request;
      const token = request.headers['access_token'] as string;
      const { id, email } = this.jwtService.decode(token) as JwtDto;

      return id !== undefined;
    } catch (e) {
      return false;
    }
  }
}
