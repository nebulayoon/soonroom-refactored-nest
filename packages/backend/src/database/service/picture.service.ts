import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from '../entity/picture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture) private pictureRepository: Repository<Picture>,
  ) {}

  async findOne(id: number, option?: object): Promise<Picture> {
    return this.pictureRepository.findOne({ where: { id }, ...option });
  }
}
