import {Categories} from "../Entities/Categories";
import {Tastes} from "../Entities/Tastes";

export class ElfbarDTO {
  id?: number;
  price: number;
  category: Categories;
  taste: Tastes;
}
