import { Body, Controller, Get, Post } from '@nestjs/common';
import { TastesService } from '../Services/TastesService';
import { TasteDTO } from '../DTO/TasteDTO';

@Controller('add')
export class TastesController {
  constructor(private editService: TastesService) {}
  @Get()
  getAll(): string {
    return 'this is edit page';
  }
  @Post()
  async editElfbar(@Body() taste: TasteDTO) {
    await this.editService.appendTaste(taste);
  }
}
