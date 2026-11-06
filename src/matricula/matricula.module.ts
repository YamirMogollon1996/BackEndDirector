import { Module } from '@nestjs/common';
import { MatriculaCrud } from './matricula.service.js';
import { MatriculaController } from './matricula.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from './entities/matricula.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Matricula])],
  controllers: [MatriculaController],
  providers: [MatriculaCrud],
})
export class MatriculaModule {}
