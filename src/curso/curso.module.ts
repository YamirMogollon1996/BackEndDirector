import { Module } from '@nestjs/common';
import { CursoService } from './curso.service.js';
import { CursoController } from './curso.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity.js';

@Module({
  imports:  [  TypeOrmModule.forFeature([ Curso])] , 
  controllers: [CursoController],
  providers: [CursoService], 
  exports:[CursoService]


})
export class CursoModule {}
