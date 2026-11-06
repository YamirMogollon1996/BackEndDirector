import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service.js';
import { AlumnoController } from './alumno.controller.js';
import { Alumno } from './entities/alumno.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailEnvio } from './helperes/EmailEnvio.js'; 
import { CursoModule } from '../curso/curso.module.js';


@Module({  
  imports : [TypeOrmModule.forFeature([Alumno])],
  controllers: [AlumnoController],
  providers: [AlumnoService, EmailEnvio],
})
export class AlumnoModule {}
