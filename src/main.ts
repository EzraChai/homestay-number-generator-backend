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
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || '0.0.0.0';
  const start = async () => {
    try {
      await app.listen(port, host);
    } catch (err) {
      process.exit(1);
    }
  };
  start();
}

bootstrap();
