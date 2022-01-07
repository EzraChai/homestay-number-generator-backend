import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      },
    },
  );
  // app.register(require('fastify-cors'), {

  // });
  // app.enableCors;
  await app.listen(4000);
}

bootstrap();
