import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  async appendTaste(@Body() taste: TasteDTO) {
    return await this.tastesService.appendTaste(taste);
  }

  @Put(':id')
  async editTasteById(@Param('id') id: number, @Body() taste: TasteDTO) {
    return this.tastesService.editTasteById(id, taste);
  }

  @Delete(':id')
  async deleteTasteById(@Param('id') id: number) {
    return this.tastesService.deleteTasteById(id);
  }
}
