import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway, PrismaService, AppService],
})
export class AppModule {}
