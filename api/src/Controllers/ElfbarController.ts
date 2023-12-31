import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ElfbarsService } from '../Services/ElfbarsService';
import { ElfbarDTO } from '../DTO/ElfbarDTO';

@Controller('elfbars')
export class ElfbarController {
  constructor(private elfbarService: ElfbarsService) {}
  @Get()
  async getAll() {
    return await this.elfbarService.getAllElfbars();
  }
  @Post()
  async addElfbar(@Body() elfbar: ElfbarDTO) {
    return await this.elfbarService.addElfbar(elfbar);
  }

  @Get(':id')
  async getElfbarById(@Param('id') id: number) {
    return await this.elfbarService.getAllElfbarById(id);
  }

  @Delete(':id')
  async deleteElfbarById(@Param('id') id: number) {
    return await this.elfbarService.deleteElfbarById(id);
  }
  @Put(':id')
  async editElfbarById(@Param('id') id: number, @Body() elfbar: ElfbarDTO) {
    return await this.elfbarService.editElfbarById(id, elfbar);
  }
}
