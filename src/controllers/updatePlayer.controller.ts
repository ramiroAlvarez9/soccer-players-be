import { Controller, Put } from '@nestjs/common';
import { PlayersService } from 'src/services/playersService.service';
import { UpdatedPlayer } from 'src/dto/updatePlayer.dto';
import { ConflictException } from '@nestjs/common';
import { Body, ValidationPipe } from '@nestjs/common';

@Controller('update-player')
export class UpdatePlayerController {
  constructor(private readonly playersService: PlayersService) {}

  @Put()
  async updatePlayer(@Body(new ValidationPipe()) dto: UpdatedPlayer) {
    try {
      return await this.playersService.updatePlayer(dto);
    } catch (error) {
      if (error instanceof Error) {
        throw new ConflictException(error.message);
      }
    }
  }
}
