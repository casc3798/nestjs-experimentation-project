import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class UserController {
  @GrpcMethod('UsersService', 'FindOne')
  findOne(
    data: {
      id: number;
    },
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): {
    id: number;
    name: string;
  } {
    const items = [
      { id: 1, name: 'Camilo' },
      { id: 2, name: 'Daniela' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
