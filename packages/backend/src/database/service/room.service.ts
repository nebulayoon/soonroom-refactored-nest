import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from '@libs/database/entity/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomEntityService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
  ) {}

  async create(room: Partial<RoomEntity>): Promise<RoomEntity> {
    const result = this.roomRepository.create(room);
    return this.roomRepository.save(result);
  }

  async findAll(option?: object): Promise<RoomEntity[]> {
    return this.roomRepository.find(option);
  }

  async findOne(id: number, option?: object): Promise<RoomEntity> {
    return this.roomRepository.findOne({ where: { id }, ...option });
  }

  async update(
    id: number,
    updateUser: Partial<RoomEntity>,
  ): Promise<RoomEntity> {
    await this.roomRepository.update(id, updateUser);
    return this.roomRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.roomRepository.delete(id);
  }
}
