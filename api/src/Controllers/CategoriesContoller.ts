import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from '../Services/CategoriesService';
import { CategoryDTO } from '../DTO/CategoryDTO';

@Controller('categories')
export class CategoriesContoller {
  constructor(private categoriesService: CategoriesService) {}
  @Post()
  async addCategory(@Body() category: CategoryDTO) {
    return await this.categoriesService.appendCategory(category);
  }
  @Get()
  async getAllCategories() {
    return await this.categoriesService.getAllCategories();
  }
  @Get(':id')
  async getCategoryById(@Param('id') id: number) {
    return await this.categoriesService.getCategoryById(id);
  }
  @Put(':id')
  async editCategoryById(
    @Param('id') id: number,
    @Body() category: CategoryDTO,
  ) {
    return await this.categoriesService.editCategoryById(id, category);
  }
  @Delete(':id')
  async deleteCategoryById(@Param('id') id: number) {
    return await this.categoriesService.deleteCategoryById(id);
  }
}
