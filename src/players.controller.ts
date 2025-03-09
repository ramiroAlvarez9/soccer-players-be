import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('players')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): string {
    return 'This action will returns all players';
  }
}
