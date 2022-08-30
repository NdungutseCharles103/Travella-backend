import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Swaggiffy } from 'swaggiffy';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3434);
  // new Swaggiffy().setupExpress(app).swaggiffy();
}
bootstrap();
