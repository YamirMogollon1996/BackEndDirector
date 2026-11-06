import { IsDateString, IsInt, isNotEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';  
import { Type } from "class-transformer"
export class CreateExamanDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsOptional()
    @IsString()
    descripcion?: string | null;

    @IsDateString()
    fecha: string;

    @IsInt()
    @Type( () => Number)
    anio: number;

    @Type( () => Number)
    @IsInt()
    duracionMinutos: number;    

    
    @IsString()
    curso :  string
}
