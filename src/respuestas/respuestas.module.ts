import { Module } from '@nestjs/common';
import { RespuestasService } from './respuestas.service.js';
import { RespuestasController } from './respuestas.controller.js';

@Module({
  controllers: [RespuestasController],
  providers: [RespuestasService],
})
export class RespuestasModule {}
