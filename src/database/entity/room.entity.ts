import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  IsString,
  IsNumber,
  IsLatitude,
  IsLongitude,
  IsBoolean,
} from 'class-validator';

@Entity('Room')
export class Room {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  phone: string;

  @Column()
  @IsLatitude()
  latitude: string;

  @Column()
  @IsLongitude()
  longitude: string;

  @Column()
  @IsNumber()
  yearPrice: number;

  @Column()
  @IsNumber()
  halfPrice: number;

  @Column()
  @IsNumber()
  monthPrice: number;

  @Column()
  @IsNumber()
  fee: number;

  @Column()
  @IsNumber()
  charterPrice: number;

  @Column()
  @IsNumber()
  maintenaceCost: number;

  @Column()
  @IsNumber()
  isMany: number;

  @Column()
  @IsBoolean()
  isWatertax: boolean;

  @Column()
  @IsBoolean()
  isElectax: boolean;

  @Column()
  @IsBoolean()
  isGastax: boolean;

  @Column()
  @IsNumber()
  gasType: number; // 난방시설 도시가스(0) 심야전기(1) LPG가스(2)

  @Column()
  @IsNumber()
  gasrangeType: number; // 가스레인지 없음(0) 전기레인지(1) 가스레인지(2)

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsString()
  comment: string;

  @Column()
  @IsBoolean()
  isBed: boolean;

  @Column()
  @IsBoolean()
  isFrige: boolean;

  @Column()
  @IsBoolean()
  isAircon: boolean;

  @Column()
  @IsBoolean()
  isWasher: boolean;

  @Column()
  @IsBoolean()
  isVeranda: boolean;

  @Column()
  @IsBoolean()
  isTV: boolean;

  @Column()
  @IsBoolean()
  isDesk: boolean;

  @Column()
  @IsBoolean()
  isMicrowave: boolean;

  @Column()
  @IsBoolean()
  isRouter: boolean;

  @Column()
  @IsBoolean()
  isElevator: boolean;

  @Column()
  @IsBoolean()
  isCctv: boolean;

  @Column()
  @IsBoolean()
  isPostbox: boolean;

  @Column()
  @IsBoolean()
  isParking: boolean;

  @Column()
  @IsBoolean()
  isFireFacility: boolean;

  @Column()
  @IsBoolean()
  isLH: boolean;

  @Column()
  @IsBoolean()
  isPet: boolean;

  @Column()
  @IsBoolean()
  isVisible: boolean;
}
