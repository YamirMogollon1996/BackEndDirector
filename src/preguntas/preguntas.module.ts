import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service.js';
import { PreguntasController } from './preguntas.controller.js';

@Module({
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
