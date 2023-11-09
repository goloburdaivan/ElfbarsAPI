import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TastesModule } from './TastesModule';
import { Tastes } from '../Entities/Tastes';
import {Categories} from "../Entities/Categories";
import {CategoriesModule} from "./CategoriesModule";
import {ElfbarModule} from "./ElfbarModule";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123123',
      database: 'elfbar_site',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TastesModule,
    CategoriesModule,
    ElfbarModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
