import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async addNewNumber() {
    const newRandomNumber = `${(Math.random() * 9).toFixed(0)}${(
      Math.random() * 9
    ).toFixed(0)}${(Math.random() * 9).toFixed(0)}${(Math.random() * 9).toFixed(
      0,
    )}`;

    await this.prismaService.randomnumber.create({
      data: {
        number_generated: newRandomNumber,
      },
    });

    return newRandomNumber;
  }

  async requestOlderNumber() {
    return await this.prismaService.randomnumber.findMany();
  }
}
