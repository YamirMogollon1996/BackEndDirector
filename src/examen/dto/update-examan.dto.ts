import { PartialType } from '@nestjs/mapped-types';
import { CreateExamanDto } from './create-examan.dto.js';

export class UpdateExamanDto extends PartialType(CreateExamanDto) {}
