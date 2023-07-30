import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'sentry',
})
export class SentryEntity {
  @PrimaryGeneratedColumn('increment')
  @Index()
  Id: number;

  @Column({ type: 'varchar', length: 128 })
  @ApiProperty({ type: String, description: '서버 이름' })
  serverName: string;

  @Column({ type: 'varchar', length: 256 })
  @ApiProperty({ type: String, description: '프로젝트 slug' })
  projectSlug: string;

  @Column({ type: 'varchar', length: 1024 })
  @ApiProperty({ type: String, description: '프로젝트 DSN' })
  dsn: string;
}
