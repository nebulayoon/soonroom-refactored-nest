import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env.service';
import { EnvController } from './env.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.production.env', '.devlopment.env'],
      isGlobal: true,
    }),
  ],
  exports: [EnvService],
  providers: [EnvService],
  controllers: [EnvController],
})
export class EnvModule {}
