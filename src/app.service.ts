import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  readonly test;
  constructor(private test2:string){}
  getHello(): string {
    return 'Hello World!';
  }
}
