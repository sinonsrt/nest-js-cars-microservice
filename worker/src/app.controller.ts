import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('WORKER_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  @EventPattern('register_cars')
  receiveCars(data: Record<string, unknown>): void {
    console.log('We have a new car -->', data);
  }
}
