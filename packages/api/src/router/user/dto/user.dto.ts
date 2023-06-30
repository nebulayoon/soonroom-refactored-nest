import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'user name' })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'password' })
  readonly password: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'password' })
  readonly password: string;
}

export class JwtDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'password' })
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;
}
