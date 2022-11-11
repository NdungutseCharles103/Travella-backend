import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const config = new DocumentBuilder()
    .setTitle('Travella apis')
    .setDescription('Travels API description')
    .setVersion('1.0')
    .addTag('travels')
    .addBearerAuth()
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const PORT = process.env.PORT || 3434;
  SwaggerModule.setup('api', app, document);
  // console.log(process.env.DB_URL);
  await app.listen(PORT);
}
bootstrap();
