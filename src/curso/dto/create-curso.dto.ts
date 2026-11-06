import {  IsString, IsNotEmpty   } from "class-validator"

export class CreateCursoDto { 

    @IsNotEmpty( { message:'no puede ir vacio'})
    @IsString( {message:'el curso tiene que ser letras no numeros ni signos'})
    nombre: string

}
