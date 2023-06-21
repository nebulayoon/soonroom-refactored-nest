import { Module } from '@nestjs/common';
import { CustomLoggerService } from './logger.service';
import { EntityServiceModule } from '@database/main.module';
import { TimeModule } from '@common/time/time.module';

@Module({
  imports: [EntityServiceModule, TimeModule],
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}
