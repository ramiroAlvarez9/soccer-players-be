import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ramiro',
      password: '154885795',
      database: 'dincy-players',
      entities: [Player],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Player]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
