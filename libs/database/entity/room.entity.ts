import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  IsString,
  IsNumber,
  IsLatitude,
  IsLongitude,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'room' })
export class RoomEntity {
  @PrimaryGeneratedColumn('increment')
  @Index()
  id: number;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '방 이름' })
  name: string;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '임대인 연락처' })
  phone: string;

  @Column()
  @IsLatitude()
  @ApiProperty({ type: Number, description: '위도' })
  latitude: number;

  @Column()
  @IsLongitude()
  @ApiProperty({ type: Number, description: '경도' })
  longitude: number;

  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '년세 가격' })
  yearPrice: number;

  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '반년세 가격' })
  halfPrice: number;

  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '월세 가격' })
  monthPrice: number;

  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '보증금 가격' })
  fee: number;

  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '전세 가격' })
  charterPrice: number;

  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '관리비' })
  maintenaceCost: number;

  @Column()
  @IsNumber()
  @ApiProperty({ type: Number, description: '최대 거주 가능 인원' })
  isMany: number;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '수도세 여부' })
  isWatertax: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '전기세 여부' })
  isElectax: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '가스비 여부' })
  isGastax: boolean;

  @Column()
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: '난방시설 도시가스(0) 심야전기(1) LPG가스(2)',
  })
  gasType: number;

  @Column()
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: '가스레인지 없음(0) 전기레인지(1) 가스레인지(2)',
  })
  gasrangeType: number;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '주소' })
  address: string;

  @Column()
  @IsString()
  @ApiProperty({ type: String, description: '임대인 코멘트' })
  comment: string;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '침대 여부' })
  isBed: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '냉장고 여부' })
  isFrige: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '에어컨 여부' })
  isAircon: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '세탁기 여부' })
  isWasher: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '베란다 여부' })
  isVeranda: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'TV 여부' })
  isTV: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '책상 여부' })
  isDesk: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '전자레인지 여부' })
  isMicrowave: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '공유기 여부' })
  isRouter: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '엘리베이터 여부' })
  isElevator: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'CCTV 여부' })
  isCctv: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '무인택배함 여부' })
  isPostbox: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '주차장 여부' })
  isParking: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '소방시설 여부' })
  isFireFacility: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'LH 전세 여부' })
  isLH: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '반려동물 여부' })
  isPet: boolean;

  @Column()
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: '[개발자 옵션] 화면 노출' })
  isVisible: boolean;
}
