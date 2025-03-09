import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nickname: string;

  @Column({
    type: 'int',
    transformer: {
      to: (value: number) => value,
      from: (value: number) => value,
    },
    nullable: false,
    default: 0,
  })
  @Check('speed_score <= 10')
  speed_score: number;

  @Column({
    type: 'int',
    transformer: {
      to: (value: number) => value,
      from: (value: number) => value,
    },
    nullable: false,
    default: 0,
  })
  @Check('resistance_score <= 10')
  resistance_score: number;

  @Column({
    type: 'int',
    transformer: {
      to: (value: number) => value,
      from: (value: number) => value,
    },
    nullable: false,
    default: 0,
  })
  @Check('technical_score <= 10')
  technical_score: number;

  @Column({
    type: 'int',
    transformer: {
      to: (value: number) => value,
      from: (value: number) => value,
    },
    nullable: false,
    default: 0,
  })
  @Check('average_score <= 10')
  average_score: number;
}

