import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  HttpStatus,
  Res,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { AuthGuard } from '@libs/common/guard/auth.guard';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const result = await this.userService.register(registerDto);

      return {
        statusCode: HttpStatus.OK,
        message: ['success'],
        result: result,
      };
    } catch (e) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: ['생성 실패'],
      };
    }
  }

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const result = await this.userService.login(loginDto);
      if (result === undefined) {
        return { statusCode: 400, message: ['fail'] };
      }

      res.cookie('access_token', result.access_token, {
        httpOnly: true,
        maxAge: 1000 * 10,
      });

      res.cookie('refresh_token', result.refresh_token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
      });

      return { statusCode: 200, message: ['success'] };
    } catch (e) {
      logger.error({ message: '로그인 실패' });
      return { statusCode: 400, message: ['fail'] };
    }
  }

  @UseGuards(AuthGuard)
  @Get('login')
  async test() {
    logger.verbose('test 동작');
    return { statusCode: 200, message: ['success'] };
  }

  @Delete()
  async deleteUser() {}

  @Put()
  async updateUser() {}
}
