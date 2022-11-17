import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookiePaser from 'cookie-parser';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookiePaser());
  const config = new DocumentBuilder()
    .setTitle('Travella apis')
    .setDescription('Travels API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  app.enableCors({
    origin: ['http://127.0.0.1:7171', 'http://localhost:7171', 'https://mytravella.vercel.app','https://travella-fawn.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Authorization', 'Content-Type']
  });
  
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
