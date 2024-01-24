import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  random(): number {
    let randomInteger = Math.random() * 100 + 1;
    return Math.floor(randomInteger) * 100;
  }
}
