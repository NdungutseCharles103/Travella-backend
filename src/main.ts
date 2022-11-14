import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import fastifyCookie from '@fastify/cookie';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.register(fastifyCookie);
  const config = new DocumentBuilder()
    .setTitle('Travella apis')
    .setDescription('Travels API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const PORT = process.env.PORT || 3434;
  SwaggerModule.setup('api', app, document);
  const started = await app.listen(PORT);

  if (started) {
    console.log(`Server started on port ${await app.getUrl()}`);
  }

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
