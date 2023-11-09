import { Module } from '@nestjs/common';
import { TastesController } from '../Controllers/TastesController';
import { TastesService } from '../Services/TastesService';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tastes } from "../Entities/Tastes";

@Module({
  imports: [TypeOrmModule.forFeature([Tastes])],
  controllers: [TastesController],
  providers: [TastesService],
})
export class TastesModule {}
