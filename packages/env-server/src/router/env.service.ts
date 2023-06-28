import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvType } from './type/env';

@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService) {}

  async read() {
    const env: EnvType = {
      MYSQL_USER: this.configService.get<string>('MYSQL_USER'),
      MYSQL_USER_PASSWORD: this.configService.get<string>(
        'MYSQL_USER_PASSWORD',
      ),
      SENTRY_TOKEN: this.configService.get<string>('SENTRY_TOKEN'),
      ORGANIZATION_SLUG: this.configService.get<string>('ORGANIZATION_SLUG'),
      TEAM_SLUG: this.configService.get<string>('TEAM_SLUG'),
    };

    return env;
  }
}
