import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.disable('x-powerd-by');

  app.use(cookieParser());
  app.use(csurf({ cookie: { maxAge: 1000 * 60 * 5 } }));
  app.use((req: any, res: any, next: any) => {
    const token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
  });
  app.use(helmet({ contentSecurityPolicy: false }));

  const config = new DocumentBuilder()
    .setTitle('Unique Contents')
    .setDescription('CardHunter API description')
    .setVersion('1.0')
    .addTag('CardHunter')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
