import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('WORKER_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  @Get()
  app() {
    return 'Hello world';
  }

  @Post('/registerCar')
  async registerCars(): Promise<any> {
    const carsMessage = {
      date: new Date().toLocaleTimeString(),
      time: new Date().getTime(),
      content: {
        model: 'Saveiro Cross MSI CE',
        year: '2016',
        license_plate: 'LMR-0800',
      },
    };

    this.client.emit('register_cars', carsMessage);

    return carsMessage;
  }
}
