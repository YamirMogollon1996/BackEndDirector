import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDocumentoDto {
  @IsString()
  @IsNotEmpty()
  nombreArchivo: string;

  @IsString()
  @IsNotEmpty()
  rutaArchivo: string;

  @IsOptional()
  @IsString()
  tipoMime?: string;

  @Type(() => Number)
  @IsInt()
  cantidadPaginas: number;  

  @Type(() => Number)
  @IsInt()
  examanId: number
}
