import { IsString, IsNumber, Min, Max } from 'class-validator';

export class UpdatedPlayer {
  @IsString({ message: 'Id must be a string' })
  id: string;

  @IsString({ message: 'Nickname must be a string.' })
  nickname: string;

  @IsNumber({}, { message: 'Speed score must be a number.' })
  @Min(1, { message: 'Speed score cannot be less than 1.' })
  @Max(10, { message: 'Speed score cannot be greater than 10.' })
  speed_score: number;

  @IsNumber({}, { message: 'Resistance score must be a number.' })
  @Min(1, { message: 'Resistance score cannot be less than 1.' })
  @Max(10, { message: 'Resistance score cannot be greater than 10.' })
  resistance_score: number;

  @IsNumber({}, { message: 'Technical score must be a number.' })
  @Min(1, { message: 'Technical score cannot be less than 1.' })
  @Max(10, { message: 'Technical score cannot be greater than 10.' })
  technical_score: number;
}
