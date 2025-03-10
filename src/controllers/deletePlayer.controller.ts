import { ConflictException, Controller, Delete } from '@nestjs/common';
import { PlayersService } from 'src/services/playersService.service';
import { PlayerId } from 'src/dto/deletePlayer.dto';
import { Body, ValidationPipe } from '@nestjs/common';

@Controller('delete-player')
export class DeletePlayerController {
  constructor(private readonly playersService: PlayersService) {}

  @Delete()
  async deletePlayerBy(@Body(new ValidationPipe()) dto: PlayerId) {
    try {
      await this.playersService.deletePlayer(dto);
      return {
        message: `Player with id ${dto.id} has been deleted successfully`,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new ConflictException(error.message);
      }
    }
  }
}
