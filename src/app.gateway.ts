import { OnGatewayDisconnect } from './../node_modules/@nestjs/websockets/interfaces/hooks/on-gateway-disconnect.interface.d';
import { OnGatewayConnection } from './../node_modules/@nestjs/websockets/interfaces/hooks/on-gateway-connection.interface.d';
import { WsResponse } from './../node_modules/@nestjs/websockets/interfaces/ws-response.interface.d';
import { OnGatewayInit } from './../node_modules/@nestjs/websockets/interfaces/hooks/on-gateway-init.interface.d';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AppService } from './app.service';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('AppGateway');

  constructor(private readonly appService: AppService) {}

  handleConnection(client: Socket, ...args: any[]) {
    this.appService.requestOlderNumber();
    this.logger.log(`Client connected:    ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  afterInit(server: any) {
    this.logger.log('Initialised!');
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket): WsResponse {
    const newNumber = this.appService.addNewNumber();
    return { event: 'messageToClient', data: newNumber };
  }
}
