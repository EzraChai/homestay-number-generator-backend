import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  WsResponse,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { AppService } from './app.service';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;
  private logger: Logger = new Logger('AppGateway');

  constructor(private readonly appService: AppService) {}

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected:    ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  afterInit(server: any) {
    this.logger.log('Initialised!');
  }

  @SubscribeMessage('initMessageFromClient')
  async handleInitMessageFromClient(client: Socket) {
    const olderNumber = await this.appService.requestOlderNumber();
    return { data: olderNumber };
  }

  @SubscribeMessage('messageToServer')
  async handleMessage(client: Socket): Promise<void> {
    console.log('running');
    const newNumber = await this.appService.addNewNumber();
    this.wss.emit('messageFromServer', { passcode: newNumber });
  }
}
