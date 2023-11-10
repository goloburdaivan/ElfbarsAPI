import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Elfbars } from '../Entities/Elfbars';
import { Repository } from 'typeorm';
import { Elfbar } from '../Interfaces/Elfbar';

@Injectable()
export class ElfbarsService {
  constructor(
    @InjectRepository(Elfbars) private elfbarRepo: Repository<Elfbars>,
  ) {}

  async findAll() {
    return await this.elfbarRepo.find();
  }

  async addElfbar(elfbar: Elfbar) {
    const new_elfbar = this.elfbarRepo.create(elfbar);
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
