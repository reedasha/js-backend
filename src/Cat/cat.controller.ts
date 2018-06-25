import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatController {
  @Post()
  create() {
    return 'This action adds a new cat';
  }

  @Get()
  findAll() {
    return 'This action returns all cats';
  }
}

