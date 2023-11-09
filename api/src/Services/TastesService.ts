import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { InjectRepository } from '@nestjs/typeorm';
import { Tastes } from '../Entities/Tastes';
import { Repository } from 'typeorm';
import { Taste } from "../Interfaces/Taste";

@Injectable()
export class TastesService {
  constructor(@InjectRepository(Tastes) private tasteRepo: Repository<Tastes>) {}
  async appendTaste(taste: Taste) {
    const record = this.tasteRepo.create(taste);
    spawn('python', ['../telegram/main.py']);
    return await this.tasteRepo.save(record);
  }

  async getTasteById(id: number) {
    return await this.tasteRepo.findOneBy({ id });
  }
  async getAllTastes() {
    return await this.tasteRepo.find();
  }
}
