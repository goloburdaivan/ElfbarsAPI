import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Categories} from "../Entities/Categories";
import {CategoriesContoller} from "../Controllers/CategoriesContoller";
import {CategoriesService} from "../Services/CategoriesService";

@Module(
    {
        imports: [TypeOrmModule.forFeature([Categories])],
        controllers: [CategoriesContoller],
        providers: [CategoriesService]
    }
) export class CategoriesModule {};