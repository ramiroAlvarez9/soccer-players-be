import { Controller, Get } from '@nestjs/common';
import { PlayersService } from 'src/playersService.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  getAll(): string {
    return 'This action will returns all players';
  }
}
