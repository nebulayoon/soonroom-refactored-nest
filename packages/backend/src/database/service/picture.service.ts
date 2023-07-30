import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PictureEntity } from '@libs/database/entity/picture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PictureEntityService {
  constructor(
    @InjectRepository(PictureEntity)
    private pictureRepository: Repository<PictureEntity>,
  ) {}

  async create(picture: Partial<PictureEntity>): Promise<PictureEntity> {
    const result = this.pictureRepository.create(picture);
    return this.pictureRepository.save(result);
  }

  async createPictures(pictures: PictureEntity[]) {
    return this.pictureRepository.save(pictures);
  }

  async findOne(id: number, option?: object): Promise<PictureEntity> {
    return this.pictureRepository.findOne({ where: { id }, ...option });
  }

  async findAll(roomId: number, option?: object) {
    return this.pictureRepository.find({ where: { roomId }, ...option });
  }
}
