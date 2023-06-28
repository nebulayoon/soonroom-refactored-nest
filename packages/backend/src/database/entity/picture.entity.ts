import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoomEntity } from './room.entity';

@Entity({ name: 'picture' })
export class PictureEntity {
  @PrimaryGeneratedColumn('increment')
  @Index()
  id: number;

  @ManyToOne(() => RoomEntity, (Room) => Room.id)
  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '[ForeignKey] room id' })
  roomId: number;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '원본명' })
  originalName: string;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '파일명' })
  fileName: string;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '사진 저장 위치' })
  path: string;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '파일 타입' })
  type: string;
}
