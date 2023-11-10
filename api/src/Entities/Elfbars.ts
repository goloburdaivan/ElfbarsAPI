import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Categories} from "./Categories";
import {Tastes} from "./Tastes";

@Entity()
export class Elfbars {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    count: number;

    @ManyToOne(() => Categories)
    @JoinColumn({name: 'category_id'})
    category: Categories;

    @ManyToOne(() => Tastes)
    @JoinColumn({name: 'taste_id'})
    taste: Tastes;
}