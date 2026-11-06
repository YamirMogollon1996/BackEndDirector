import { IsString, IsInt, IsEmail, IsNotEmpty, Length, IsEnum } from "class-validator"
import { ClassTransformer } from "class-transformer"
import { RolAlumno } from "../entities/alumno.entity.js"; 
  
export class CreateAlumnoDto {
    @IsNotEmpty({
        message: 'no puede ir vacio'
    })
    @IsString({ message: 'solo admitimos string' })
    @Length(2, 10, {
        message: 'nombre debe tener entre 2 y 10 caracteres'
    })
    nombre: string;

    @Length(2, 10, {
        message: 'nombre debe tener entre 2 y 10 caracteres'
    })
    @IsNotEmpty({
        message: 'no puede ir vacio'
    })
    apellido: string;

    @IsNotEmpty({
        message: 'no puede ir vacio'
    })
    @IsInt({ message: 'solo admitimos  numeros ' })
    edad: number;

    @IsNotEmpty({
        message: 'no puede ir vacio'
    })
    @IsEmail()
    email: string;   
    @Length(2,40)  
    @IsNotEmpty({
        message: 'no puede ir vacio'
    })
    password: string;
    
    @IsNotEmpty({ message: 'no puede ir vacio' })
    @IsEnum(RolAlumno, { message: 'rol no válido' })
    role: RolAlumno
    
}
