import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PhotoController } from './Photo/photo.controller';
import { CatController } from 'Cat/cat.controller';
import { PhotoModule } from './Photo/photo.module';

@Module({
  imports: [
    PhotoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [CatController],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}