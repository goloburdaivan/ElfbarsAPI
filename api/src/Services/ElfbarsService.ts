import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Elfbars } from '../Entities/Elfbars';
import { Repository } from 'typeorm';
import { Elfbar } from '../Interfaces/Elfbar';
import { spawn } from 'child_process';

@Injectable()
export class ElfbarsService {
  constructor(
    @InjectRepository(Elfbars) private elfbarRepo: Repository<Elfbars>,
  ) {}
  async getElfbarsByCategory(id: number) {
    return await this.elfbarRepo
      .createQueryBuilder('elfbars')
      .leftJoinAndSelect('elfbars.taste', 'taste')
      .leftJoinAndSelect('elfbars.category', 'category')
      .addSelect('taste.title')
      .addSelect('category.title')
      .addSelect('category.message_id')
      .addSelect('category.tg_chat_id')
      .where('category.id = :id', { id })
      .getMany();
  }
  async addElfbar(elfbar: Elfbar) {
    const new_elfbar = this.elfbarRepo.create(elfbar);
    const elfbars = await this.getElfbarsByCategory(new_elfbar.category.id);
    elfbars.push(new_elfbar);
    const args = [
      new_elfbar.category.tg_chat_id,
      new_elfbar.category.message_id.toString(),
      new_elfbar.category.title,
    ];
    let tastes = '';
    elfbars.forEach((el) => {
      tastes += `${el.taste.title}\n`;
    });
    args.push(tastes);
    args.push(new_elfbar.price.toString());
    spawn('python', ['../telegram/main.py', ...args]);
    return await this.elfbarRepo.save(new_elfbar);
  }

  async getAllElfbars() {
    return await this.elfbarRepo
      .createQueryBuilder('elfbars')
      .leftJoinAndSelect('elfbars.taste', 'taste')
      .leftJoinAndSelect('elfbars.category', 'category')
      .addSelect('taste.title')
      .addSelect('category.title')
      .addSelect('category.message_id')
      .addSelect('category.tg_chat_id')
      .getMany();
  }

  async getAllElfbarById(id: number) {
    return await this.elfbarRepo
      .createQueryBuilder('elfbars')
      .leftJoinAndSelect('elfbars.taste', 'taste')
      .leftJoinAndSelect('elfbars.category', 'category')
      .addSelect('taste.title')
      .addSelect('category.title')
      .addSelect('category.message_id')
      .addSelect('category.tg_chat_id')
      .where('elfbars.id = :id', { id })
      .getOne();
  }

  async deleteElfbarById(id: number) {
    return await this.elfbarRepo.delete({ id });
  }

  async editElfbarById(id: number, elfbar: Elfbar) {
    await this.elfbarRepo.update(id, elfbar);
    return await this.getAllElfbarById(id);
  }
}
