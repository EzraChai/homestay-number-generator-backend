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
        origin: ['https://cshomestay-passcode.vercel.app/'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      },
    },
  );
  console.log(`App listen at PORT ${process.env.PORT}`);
  await app.listen(process.env.PORT || 5000);
}

bootstrap();
