import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  readonly test: string;
  constructor(private  readonly appService: AppService) {
    console.log('test');
  }

  @Get()
  getHello(): string {
    console.log(test);
    return this.appService.getHello();
  }
}
