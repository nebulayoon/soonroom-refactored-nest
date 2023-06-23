import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '@database/entity/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private roomRepository: Repository<Room>,
  ) {}

  async create(room: Partial<Room>): Promise<Room> {
    const result = this.roomRepository.create(room);
    return this.roomRepository.save(result);
  }

  async findAll(option?: object): Promise<Room[]> {
    return this.roomRepository.find(option);
  }

  async findOne(id: number, option?: object): Promise<Room> {
    return this.roomRepository.findOne({ where: { id }, ...option });
  }

  async update(id: number, updateUser: Partial<Room>): Promise<Room> {
    await this.roomRepository.update(id, updateUser);
    return this.roomRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.roomRepository.delete(id);
  }
}
