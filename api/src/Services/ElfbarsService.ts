import {Injectable, Param} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Elfbars} from "../Entities/Elfbars";
import {Repository} from "typeorm";
import {Elfbar} from "../Interfaces/Elfbar";
import {Tastes} from "../Entities/Tastes";

@Injectable()
export class ElfbarsService {
    constructor(@InjectRepository(Elfbars) private elfbarRepo: Repository<Elfbars>) {}

    async findAll() {
        return await this.elfbarRepo.find();
    }

    async addElfbar(elfbar: Elfbar) {
        const new_elfbar = this.elfbarRepo.create(elfbar);
        return await this.elfbarRepo.save(new_elfbar);
    }

    async getElfbarById() {
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
}