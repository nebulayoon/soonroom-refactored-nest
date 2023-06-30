import { Body, Inject, Injectable, Req, Res } from '@nestjs/common';
import { EntityService } from 'src/database/main.service';
import { JwtDto, LoginDto, RegisterDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { compare, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(EntityService) private readonly entityService: EntityService,
    private jwtService: JwtService,
  ) {}

  async register(@Body() registerDto: RegisterDto) {
    const hashedPassword = await hash(registerDto.password, 10);
    await this.entityService.user.create({
      ...registerDto,
      password: hashedPassword,
    });
    return 1;
  }

  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.entityService.user.findUser(loginDto.email);
      console.log(user.password);
      const validatePassword = await compare(loginDto.password, user.password);

      if (!user || !validatePassword) {
        return undefined;
      }

      const payload = { id: user.id, email: user.email };

      const access_token = this.jwtService.sign(payload);
      const refresh_token = this.jwtService.sign(
        { id: user.id },
        { expiresIn: '7d' },
      );

      logger.verbose(user.id.toString());
      logger.verbose(refresh_token);

      await this.entityService.user.update(user.id, { refresh_token });

      logger.verbose('진행 테스트');

      return {
        access_token,
        refresh_token,
      };
    } catch (e) {
      logger.error(e);
      return undefined;
    }
  }

  async deleteUser(id: number, @Req() req: Request) {
    // 약식임. service에서 @Req를 사용하면, 파라미터를 넘겨야해서 불편
    const token = req.headers['access_token'] as string;

    const jwt = this.jwtService.decode(token) as JwtDto;
    if (jwt.id !== id) {
      return undefined;
    }

    return await this.entityService.user.delete(id);
  }
}
