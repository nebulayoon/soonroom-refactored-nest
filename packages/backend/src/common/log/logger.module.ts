import { Module } from '@nestjs/common';
import { CustomLoggerService } from './logger.service';
import { EntityServiceModule } from 'src/database/main.module';
import { TimeModule } from '../time/time.module';

@Module({
  imports: [EntityServiceModule, TimeModule],
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}
