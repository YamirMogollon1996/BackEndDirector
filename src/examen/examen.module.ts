import { Module } from '@nestjs/common';
import { ExamenService } from './examen.service.js';
import { ExamenController } from './examen.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examan } from './entities/examan.entity.js';
import { CursoModule } from '../curso/curso.module.js';
import { DocumentosModule } from '../documentos/documentos.module.js';



@Module({
  imports: [ TypeOrmModule.forFeature([ Examan]),  CursoModule  ,  DocumentosModule] ,
  controllers: [ExamenController],
  providers: [ExamenService], 
  exports  :  []
})
export class ExamenModule {}
