import { Module } from '@nestjs/common';
import { DocumentosService } from './documentos.service.js';
import { DocumentosController } from './documentos.controller.js';  
import { Documento } from './entities/documento.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports:  [ TypeOrmModule.forFeature([Documento])] , 
  controllers: [DocumentosController],
  providers: [DocumentosService],
  exports:  [DocumentosService]
})

export class DocumentosModule {}
