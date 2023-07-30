import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SentryEntity } from '@libs/database/entity/sentry.entity';

@Injectable()
export class SentryEntityService {
  constructor(
    @InjectRepository(SentryEntity)
    private readonly sentryRepository: Repository<SentryEntity>,
  ) {}

  async create(sentryEntity: Partial<SentryEntity>): Promise<SentryEntity> {
    return this.sentryRepository.save(sentryEntity);
  }

  async findOne(serverName: string): Promise<SentryEntity> {
    return this.sentryRepository.findOne({ where: { serverName } });
  }
}
