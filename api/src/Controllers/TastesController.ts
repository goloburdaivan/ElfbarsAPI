import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { TastesService } from '../Services/TastesService';
import { TasteDTO } from '../DTO/TasteDTO';

@Controller('tastes')
export class TastesController {
  constructor(private tastesService: TastesService) {}
  @Get()
  async getAll() {
    return this.tastesService.getAllTastes();
  }

  @Get(':id')
  async getTasteById(@Param('id') id: number) {
      return this.tastesService.getTasteById(id);
  }

  @Post()
  async editElfbar(@Body() taste: TasteDTO) {
    await this.tastesService.appendTaste(taste);
  }
}
