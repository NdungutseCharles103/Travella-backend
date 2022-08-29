import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [
      {
        name: 'charles',
        age: '25',
      },
      {
        name: 'james',
        age: '26',
      },
    ];
  }
}
