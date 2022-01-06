import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  addNewNumber() {
    const firstRandomNumber = Math.random() * 10;
    const secondRandomNumber = Math.random() * 10;
    const thirdRandomNumber = Math.random() * 10;
    const fourthRandomNumber = Math.random() * 10;

    const newRandomNumber = `${firstRandomNumber}${secondRandomNumber}${thirdRandomNumber}${fourthRandomNumber}`;

    return newRandomNumber;
  }

  requestOlderNumber() {
    return this.prismaService.randomNumber.findMany();
  }
}
