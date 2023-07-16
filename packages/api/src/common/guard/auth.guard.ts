import {
  CanActivate,
  ExecutionContext,
  Inject,
  forwardRef,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Request } from 'express';
import { JwtDto } from 'src/router/user/dto/user.dto';

export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    try {
      const request = ctx.switchToHttp().getRequest() as Request;
      const token = request.headers['access_token'] as string;
      if (!token) {
        throw new UnauthorizedException();
      }
      const payload = this.jwtService.decode(token) as JwtDto;
      request['user'] = payload;

      return payload.id !== undefined;
    } catch (e) {
      return false;
    }
  }
}
