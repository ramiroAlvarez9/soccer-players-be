import {
  Controller,
  Post,
  HttpCode,
  Body,
  ConflictException,
} from '@nestjs/common';
import { CreatePlayerDto } from '../dto/createPlayer.dto';
import { ValidationPipe } from '@nestjs/common';
import { PlayersService } from 'src/services/playersService.service';
import { QueryFailedError } from 'typeorm';

@Controller('create-player')
export class CreatePlayerController {
  constructor(private readonly playersService: PlayersService) { }

  @Post()
  @HttpCode(200)
  async createPlayer(
    @Body(new ValidationPipe()) createPlayerDto: CreatePlayerDto,
  ): Promise<CreatePlayerDto> {
    try {
      const player = await this.playersService.createPlayer(createPlayerDto);
      return player;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ConflictException(error.message);
      }
      throw error;
    }
  }
}
