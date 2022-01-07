import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { AppService } from './app.service';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly appService;
    wss: Server;
    private logger;
    constructor(appService: AppService);
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    afterInit(server: any): void;
    handleInitMessageFromClient(client: Socket): Promise<{
        data: import(".prisma/client").randomnumber[];
    }>;
    handleMessage(client: Socket): Promise<void>;
}
