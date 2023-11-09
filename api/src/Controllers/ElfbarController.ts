import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ElfbarsService} from "../Services/ElfbarsService";
import {ElfbarDTO} from "../DTO/ElfbarDTO";

@Controller('elfbars')
export class ElfbarController {

    constructor(private elfbarService: ElfbarsService) {
    }
    @Get()
    async getAll() {
        return await this.elfbarService.getElfbarById();
    }
    @Post()
    async addElfbar(@Body() elfbar: ElfbarDTO) {
        return await this.elfbarService.addElfbar(elfbar);
    }
}