import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Elfbars} from "../Entities/Elfbars";
import {ElfbarController} from "../Controllers/ElfbarController";
import {ElfbarsService} from "../Services/ElfbarsService";

@Module(
    {
        imports: [TypeOrmModule.forFeature([Elfbars])],
        controllers: [ElfbarController],
        providers: [ElfbarsService]
    }
) export class ElfbarModule {};