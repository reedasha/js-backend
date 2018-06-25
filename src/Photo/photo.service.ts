import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
        ) {}

  async create(photo: Photo): Promise<Photo> {
    await this.photoRepository.save(photo);
    return photo;
  }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findOne(int: number): Promise<Photo> {
    return await this.photoRepository.findOne({id: int});
  }

  async deleteOne(int: number): Promise<Photo> {
    try {
        const toDelete = this.photoRepository.findOne({id: int});
        await this.photoRepository.delete({id: int});
        return toDelete;
    } catch (e) {
        console.log(e);
    }
  }
}