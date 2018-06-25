import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CreatePhotoDto } from './create-photo.dto';
import { PhotoService } from './photo.service'
import { Photo } from './photo.interface'

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async findAll(): Promise<Photo[]> {
    return await this.photoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.photoService.findOne(id);
  }

  @Post()
  async create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
    return await this.photoService.create(createPhotoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
      return await this.photoService.deleteOne(id);
  }
}