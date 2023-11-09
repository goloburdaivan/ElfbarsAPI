import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tastes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
