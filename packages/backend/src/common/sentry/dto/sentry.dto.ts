import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class errorProperty {
  @IsOptional()
  @ApiProperty({ type: String, description: '에러 객체 메시지' })
  message?: any;

  @IsOptional()
  @ApiProperty({ type: String, description: '에러 객체 이름' })
  name?: any;

  @IsOptional()
  @ApiProperty({ type: String, description: '에러 객체 스택' })
  stack?: any;
}

export class SentryDataDto {
  @IsString()
  readonly serverName: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, description: '에러 객체' })
  readonly error: errorProperty;

  @IsOptional()
  @ApiProperty({ type: String, description: '내용 작성' })
  readonly context: string;

  @IsOptional()
  @ApiProperty({ type: Object, description: '추가 태그' })
  readonly tags: object;
}
