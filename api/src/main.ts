import { NestFactory } from '@nestjs/core';
import { AppModule } from './Modules/AppModule';
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}
bootstrap();
