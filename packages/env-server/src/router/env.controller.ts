import { Controller, Get, HttpStatus } from '@nestjs/common';
import { EnvService } from './env.service';

@Controller('env')
export class EnvController {
  constructor(private readonly envService: EnvService) {}

  @Get()
  async read() {
    try {
      const result = await this.envService.read();
      if (result === undefined) {
        return { statusCode: HttpStatus.BAD_REQUEST, message: ['failed'] };
      }
      return result;
    } catch (e) {
      return { statusCode: HttpStatus.BAD_REQUEST, message: ['failed'] };
    }
  }
}
