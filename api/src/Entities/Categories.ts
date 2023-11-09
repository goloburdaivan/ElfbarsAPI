import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message_id: number;

    @Column()
    tg_chat_id: number;

    @Column()
    title: string;
}