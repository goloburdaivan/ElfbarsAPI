import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { InjectRepository } from '@nestjs/typeorm';
import { Tastes } from '../Entities/Tastes';
import { Repository } from 'typeorm';
import { Taste } from '../Interfaces/Taste';

@Injectable()
export class TastesService {
  constructor(
    @InjectRepository(Tastes) private tasteRepo: Repository<Tastes>,
  ) {}
  async appendTaste(taste: Taste) {
    const record = this.tasteRepo.create(taste);
    return await this.tasteRepo.save(record);
  }
  async getTasteById(id: number) {
    return await this.tasteRepo.findOneBy({ id });
  }
  async getAllTastes() {
    return await this.tasteRepo.find();
  }
  async editTasteById(id: number, taste: Taste) {
    await this.tasteRepo.update(id, taste);
    return await this.getTasteById(id);
  }
  async deleteTasteById(id: number) {
    await this.tasteRepo.delete({ id });
    return this.getAllTastes();
  }
}
