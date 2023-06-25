import { Module } from '@nestjs/common';
import { EnvModule } from './router/env.module';

@Module({
  imports: [EnvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
