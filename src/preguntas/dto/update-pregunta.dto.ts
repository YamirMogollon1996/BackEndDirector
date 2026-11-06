import { PartialType } from '@nestjs/mapped-types';
import { CreatePreguntaDto } from './create-pregunta.dto.js';

export class UpdatePreguntaDto extends PartialType(CreatePreguntaDto) {}
