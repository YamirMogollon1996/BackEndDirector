import { PartialType } from '@nestjs/mapped-types';
import { CreateRespuestaDto } from './create-respuesta.dto.js';

export class UpdateRespuestaDto extends PartialType(CreateRespuestaDto) {}
