import { TypeEnv } from 'src/common/env/env';
import { CustomLoggerService } from 'src/common/logger/logger.service';

/* eslint-disable no-var */
declare global {
  var logger: CustomLoggerService;
  var env: TypeEnv;
}
