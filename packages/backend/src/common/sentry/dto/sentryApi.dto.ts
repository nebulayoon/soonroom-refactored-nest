import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SentryAvatarDto {
  @IsString()
  @ApiProperty({ type: String, description: 'avatar type' })
  readonly avatarType: string;
  @IsString()
  @ApiProperty({ type: String, description: 'avatarUUID (nullable)' })
  readonly avatarUUID?: string;
}

export class SentryCreateProjectDto {
  @IsString()
  @ApiProperty({ type: String, description: 'project id' })
  readonly id: string;

  @IsString()
  @ApiProperty({ type: String, description: 'project slug' })
  readonly slug: string;

  @IsString()
  @ApiProperty({ type: String, description: 'project name' })
  readonly name: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    description: 'project visibility',
  })
  readonly isPublic: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'isBookmarked' })
  readonly isBookmarked: boolean;

  @IsString()
  @ApiProperty({ type: String, description: 'color (#xxxxxx)' })
  readonly color: string;

  @IsString()
  @ApiProperty({ type: String, description: 'project created time(date-time)' })
  readonly dateCreated: string;

  @IsString()
  @ApiProperty({ type: String, description: 'first event (nullable)' })
  readonly firstEvent?: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    description: '# 공식 API문서에 정의되어 있지 않음',
  })
  readonly firstTransactionEvent: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'session state' })
  readonly hasSessions: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'profile state' })
  readonly hasProfiles: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'replay state' })
  readonly hasReplays: boolean;

  @IsArray()
  @ApiProperty({ type: Array, description: 'features' })
  readonly features: Array<string>;

  @IsString()
  @ApiProperty({
    type: String,
    description:
      'status(enum: [active, disabled, pending_deletion, deletion_in_progress])',
  })
  readonly status: string;

  @IsString()
  @ApiProperty({ type: String, description: 'platform (nullable)' })
  readonly platform?: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'internal' })
  readonly isInternal: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'memeber' })
  readonly isMember: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'Access' })
  readonly hasAccess: boolean;

  @Type(() => SentryAvatarDto)
  readonly avatar: SentryAvatarDto;
}

export class TeamDto {
  @IsString()
  @ApiProperty({ type: String, description: 'team' })
  readonly id: string;

  @IsString()
  @ApiProperty({ type: String, description: 'team slug' })
  readonly slug: string;

  @IsString()
  @ApiProperty({ type: String, description: 'team name' })
  readonly name: string;
}
export class EventProcessingDto {
  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'symbolication degraded' })
  readonly symbolicationDegraded: boolean;
}
export class SentryProjectListDto {
  @Type(() => TeamDto)
  readonly team: TeamDto;

  @IsArray()
  readonly teams: TeamDto[];

  @IsString()
  @ApiProperty({ type: String, description: 'project id' })
  readonly id: string;

  @IsString()
  @ApiProperty({ type: String, description: 'project name' })
  readonly name: string;

  @IsString()
  @ApiProperty({ type: String, description: 'project slug' })
  readonly slug: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'bookmark' })
  readonly isBookmarked: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'member' })
  readonly isMember: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'access' })
  readonly hasAccess: boolean;

  @IsString()
  @ApiProperty({ type: String, description: 'created time (data-time)' })
  readonly dateCreated: string;

  @IsArray()
  @ApiProperty({ type: Array, description: 'enviroments' })
  readonly environments: [];

  @Type(() => EventProcessingDto)
  readonly eventProcessing: EventProcessingDto;

  @IsArray()
  @ApiProperty({ type: Array, description: 'features' })
  readonly features: Array<string>;

  @IsString()
  @ApiProperty({ type: String, description: 'fisrtEvent (nullable)' })
  readonly firstEvent?: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    description: '# 공식 API문서에 정의되어 있지 않음',
  })
  readonly firstTransactionEvent: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'session state' })
  readonly hasSessions: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'profile state' })
  readonly hasProfiles: boolean;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'replay state' })
  readonly hasReplays: boolean;

  @IsString()
  @ApiProperty({ type: String, description: 'platform (nullable)' })
  readonly platform?: string;

  @IsString()
  @ApiProperty({
    type: Array,
    description: '# 공식 API문서에 정의되어 있지 않음',
  })
  readonly platforms: Array<any>;

  @IsString()
  @ApiProperty({
    type: String,
    description: '# 공식 API문서에 정의되어 있지 않음 (nullable)',
  })
  readonly latestRelease?: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    description: '# 공식 API문서에 정의되어 있지 않음',
  })
  readonly hasUserReports: boolean;

  @IsString()
  @ApiProperty({ type: String, description: 'deploys (nullable)' })
  readonly latestDeploys?: string;
}
export class SentryDsnDto {
  @IsString()
  @ApiProperty({ type: String, description: 'dsn[].secret key' })
  readonly secret: string;

  @IsString()
  @ApiProperty({ type: String, description: 'dsn[].public key(DSN)' })
  readonly public: string;

  @IsString()
  @ApiProperty({ type: String, description: 'dsn[].csp' })
  readonly csp: string;

  @IsString()
  @ApiProperty({ type: String, description: 'dsn[].security' })
  readonly security: string;
  @IsString()
  @ApiProperty({ type: String, description: 'dsn[].minidump' })
  readonly minidump: string;

  @IsString()
  @ApiProperty({ type: String, description: 'dsn[].unreal' })
  readonly unreal: string;

  @IsString()
  @ApiProperty({ type: String, description: 'dsn[].cdn' })
  readonly cdn: string;
}
export class SentryBrowserSdkDto {
  @IsObject()
  @ApiProperty({ type: Object, description: 'choices' })
  readonly choices: Array<any>;
}
export class SentryProjectDsnsDto {
  @IsString()
  @ApiProperty({ type: String, description: 'project id' })
  readonly id: string;

  @IsString()
  @ApiProperty({ type: String, description: 'project name' })
  readonly name: string;

  @IsString()
  @ApiProperty({ type: String, description: 'lable' })
  readonly label: string;

  @IsString()
  @ApiProperty({ type: String, description: 'public key' })
  readonly public: string;

  @IsString()
  @ApiProperty({ type: String, description: 'secret key' })
  readonly secret: string;

  @IsNumber()
  @ApiProperty({ type: Number, description: 'project numeric id' })
  readonly projectId: number;

  @IsBoolean()
  @ApiProperty({ type: Boolean, description: 'activate' })
  readonly isActive: boolean;

  @IsString()
  @ApiProperty({ type: String, description: 'rate limit (nullable)' })
  readonly rateLimit?: string;

  @Type(() => SentryDsnDto)
  readonly dsn: SentryDsnDto;
  @IsString()
  @ApiProperty({ type: String, description: 'browser sdk version' })
  readonly browserSdkVersion: string;

  @Type(() => SentryBrowserSdkDto)
  readonly browserSdk: SentryBrowserSdkDto;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'created date (date-time)',
  })
  readonly dateCreated: string;
}
