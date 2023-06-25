import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService) {}

  async read() {
    const env = {
      MYSQL_USER: this.configService.get<string>('MYSQL_USER'),
      MYSQL_USER_PASSWORD: this.configService.get<string>(
        'MYSQL_USER_PASSWORD',
      ),
    };

    return env;
  }
}
