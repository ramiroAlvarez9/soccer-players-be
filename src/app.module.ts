import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PlayersController } from './controllers/players.controller';
import { CreatePlayerController } from './controllers/createPlayer.controller';
import { ConfigModule } from '@nestjs/config';
import { PlayersService } from './services/playersService.service';
import { ApiKeyMiddleware } from './middlewares/apikey.middleware';
import { RequestMethod } from '@nestjs/common';
import { UpdatePlayerController } from './controllers/updatePlayer.controller';
import { DeletePlayerController } from './controllers/deletePlayer.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.DATABASE_HOST}`,
      port: 5432,
      username: `${process.env.DATABASE_USERNAME}`,
      password: `${process.env.DATABASE_PASSWORD}`,
      database: `${process.env.DATABASE_NAME}`,
      entities: [Player],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Player]),
  ],
  controllers: [
    PlayersController,
    CreatePlayerController,
    UpdatePlayerController,
    DeletePlayerController,
  ],
  providers: [PlayersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes(
        { path: 'create-player', method: RequestMethod.POST },
        { path: 'players', method: RequestMethod.GET },
      );
  }
}
