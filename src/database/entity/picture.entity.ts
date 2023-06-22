import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  IsString,
  IsNumber,
  IsLatitude,
  IsLongitude,
  IsBoolean,
} from 'class-validator';
import { Room } from './room.entity';

@Entity('Picture')
export class Picture {
  @PrimaryGeneratedColumn('increment')
  @Index()
  id: number;

  @ManyToOne(() => Room, (Room) => Room.id)
  @Column()
  @IsNumber()
  roomId: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  path: string;
}
