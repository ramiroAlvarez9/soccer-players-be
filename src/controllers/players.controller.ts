import { Controller, Get } from '@nestjs/common';
import { PlayersService } from 'src/services/playersService.service';
import { Player } from 'src/entities/player.entity';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  getAll(): Promise<Player[]> {
    return this.playersService.getAll();
  }
}
