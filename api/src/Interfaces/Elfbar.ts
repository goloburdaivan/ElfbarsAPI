import {Categories} from "../Entities/Categories";
import {Tastes} from "../Entities/Tastes";

export interface Elfbar {
    id?: number;
    price: number;
    count: number;
    category: Categories;
    taste: Tastes;
}
