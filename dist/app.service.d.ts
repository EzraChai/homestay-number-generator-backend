import { PrismaService } from 'src/prisma/prisma.service';
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    addNewNumber(): Promise<string>;
    requestOlderNumber(): Promise<import(".prisma/client").randomnumber[]>;
}
