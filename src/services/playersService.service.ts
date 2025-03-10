import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from 'src/dto/createPlayer.dto';
import { Player } from 'src/entities/player.entity';
import { UpdatedPlayer } from 'src/dto/updatePlayer.dto';
import { PlayerId } from 'src/dto/deletePlayer.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async createPlayer(dto: CreatePlayerDto): Promise<Player> {
    const player = this.playerRepository.create(dto);
    return await this.playerRepository.save(player);
  }

  async getAll(): Promise<Player[]> {
    return await this.playerRepository.find();
  }

  async updatePlayer(updatedPlayer: UpdatedPlayer): Promise<Player> {
    const player = await this.playerRepository.findOne({
      where: { id: updatedPlayer.id },
    });

    player.nickname = updatedPlayer.nickname;
    player.speed_score = updatedPlayer.speed_score;
    player.resistance_score = updatedPlayer.resistance_score;
    player.technical_score = updatedPlayer.technical_score;

    return await this.playerRepository.save(player);
  }

  async deletePlayer(dto: PlayerId) {
    await this.playerRepository.findOne({
      where: { id: dto.id },
    });

    return await this.playerRepository.delete(dto.id);
  }
}
