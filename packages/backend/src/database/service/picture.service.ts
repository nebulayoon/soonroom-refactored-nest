import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from '../entity/picture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture) private pictureRepository: Repository<Picture>,
  ) {}

  async create(picture: Partial<Picture>): Promise<Picture> {
    const result = this.pictureRepository.create(picture);
    return this.pictureRepository.save(result);
  }

  async createPictures(pictures: Picture[]) {
    return this.pictureRepository.save(pictures);
  }

  async findOne(id: number, option?: object): Promise<Picture> {
    return this.pictureRepository.findOne({ where: { id }, ...option });
  }

  async findAll(roomId: number, option?: object) {
    return this.pictureRepository.find({ where: { roomId }, ...option });
  }
}
