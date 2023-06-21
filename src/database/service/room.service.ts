import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '@database/entity/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private roomRepository: Repository<Room>,
  ) {}

  async create(user: Partial<Room>): Promise<Room> {
    const result = this.roomRepository.create(user);
    return this.roomRepository.save(result);
  }

  async findAll(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  async findOne(id: number): Promise<Room> {
    return this.roomRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUser: Partial<Room>): Promise<Room> {
    await this.roomRepository.update(id, updateUser);
    return this.roomRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.roomRepository.delete(id);
  }
}
