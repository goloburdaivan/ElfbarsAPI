import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Elfbars} from "./Elfbars";

@Entity()
export class Tastes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Elfbars, elfbars => elfbars.taste)
  elfbars: Elfbars[];
}
