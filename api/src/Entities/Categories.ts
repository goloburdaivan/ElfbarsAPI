import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Elfbars} from "./Elfbars";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message_id: number;

    @Column()
    tg_chat_id: string;

    @Column()
    title: string;
    @OneToMany(() => Elfbars, elfbars => elfbars.category)
    elfbars: Elfbars[];
}