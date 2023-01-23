import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cats';
  }

  @Get(':id')
  getCat() {
    return 'get cat';
  }

  @Post(':id')
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updateParticialCat() {
    return 'update particiual cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
