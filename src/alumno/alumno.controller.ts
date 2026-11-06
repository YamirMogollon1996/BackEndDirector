import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AlumnoService } from './alumno.service.js';
import { CreateAlumnoDto } from './dto/create-alumno.dto.js';
import { UpdateAlumnoDto } from './dto/update-alumno.dto.js';
import { ValidateGuard } from "./guards/validate.js"
import { IsEmail, IsString, MinLength } from 'class-validator';

export class IniciarSesionDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1)
  password: string;

}
@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) { }
  @Post('/session')
  async IniciarSessionT(@Body() iniciarSesionDto: IniciarSesionDto) {
    // console.log(iniciarSesionDto)
    const { email, password } = iniciarSesionDto;
    let { token, pass } = await this.alumnoService.iniciarSesion(email, password)
    if (!token) {
      throw new UnauthorizedException('error no son los datos')
    }
    return {
      token,
      pass
    }
  }
  @Post()
  async create(@Body() createAlumnoDto: CreateAlumnoDto) {
    try {
      console.log(createAlumnoDto)
      const { token } = await this.alumnoService.create(createAlumnoDto);
      return {
        msg: 'alumno creado',
        token
      }
    } catch (error) {
      console.log(error)
      if (error instanceof Error) {
        return {
          messge: error.message
        }
      }
      return error
    }
  }

  @UseGuards(ValidateGuard)
  @Get()
  async findAll() {
    try {

      let datos = await this.alumnoService.findAll();
      return {
        datos: datos
      }
    } catch (error) {


    }

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoService.update(+id, updateAlumnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoService.remove(+id);
  }


}
