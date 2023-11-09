import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Categories} from "../Entities/Categories";
import {Repository} from "typeorm";
import {Category} from "../Interfaces/Category";

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Categories) private categoriesRepo: Repository<Categories>) {}
    async appendCategory(category: Category) {
        const new_category = this.categoriesRepo.create(category);
        return await this.categoriesRepo.save(new_category);
    }

    async getCategoryById(id: number) {
        return this.categoriesRepo.findOneBy({ id });
    }

    async getAllCategories() {
        return this.categoriesRepo.find();
    }
}