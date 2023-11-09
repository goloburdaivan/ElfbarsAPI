import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TastesModule } from './TastesModule';
import { Tastes } from '../Entities/Tastes';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123123',
      database: 'elfbar_site',
      entities: [Tastes],
      synchronize: false,
    }),
    TastesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
