import { IsString } from 'class-validator';

export class PlayerId {
  @IsString({ message: 'Id must be a string' })
  id: string;
}
