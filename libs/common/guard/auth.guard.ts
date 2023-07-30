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

export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    try {
      const request = ctx.switchToHttp().getRequest() as Request;
      const token = request.headers['access_token'] as string;
      if (!token) {
        throw new UnauthorizedException();
      }
      const payload = this.jwtService.decode(token) as any; // refactoring 임시 설정 -> 따로 작성된 auth코드 옮길 예정
      request['user'] = payload;

      return payload.id !== undefined;
    } catch (e) {
      return false;
    }
  }
}
