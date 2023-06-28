import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { initEnv } from '@common/env/env';
import { initLogMQ } from '@database/rabbitmq';

async function bootstrap() {
  await initEnv();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await initLogMQ();

  app.enableCors();
  app.disable('x-powerd-by');

  const config = new DocumentBuilder()
    .setTitle('Soonroom')
    .setDescription('Soonroom API description')
    .setVersion('1.0')
    .addTag('Soonroom')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
