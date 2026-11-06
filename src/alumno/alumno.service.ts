import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto.js';
import { UpdateAlumnoDto } from './dto/update-alumno.dto.js';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import jwt from "jsonwebtoken"
import { EmailEnvio } from './helperes/EmailEnvio.js';
import bcrypt from "bcrypt"


interface AuthReponseCraete {  
  pass:  Boolean , 
  token: string
}
@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private readonly Repositorioalumno: Repository<Alumno>,
    private readonly EmialSerivces: EmailEnvio
  ) { }

  async create(createAlumnoDto: CreateAlumnoDto): Promise< Partial<AuthReponseCraete>> {
    console.log(createAlumnoDto)
    let password = await bcrypt.hash(createAlumnoDto.password, 8)
    let alumnoentidad = await this.Repositorioalumno.create({ ...createAlumnoDto, password })
    console.log(alumnoentidad)

    let sgin = jwt.sign(
      {
        nombre: createAlumnoDto.nombre,
        apelldio: createAlumnoDto.apellido,
        email: createAlumnoDto.email,
        edad: createAlumnoDto.edad,
        role: createAlumnoDto.role
      }
      , process.env.SECRET_TOKEN!)

    let data = await this.EmialSerivces.Envio('mogollonosorioyamir@gmail.com')
    console.log(data.mensaje)

    await this.Repositorioalumno.save(alumnoentidad)
    return {
      token: sgin
    }
  }
  findAll() {
    return this.Repositorioalumno.find()
  }
  async iniciarSesion(email: string, password: string): Promise<AuthReponseCraete> {
    const alumno = await this.Repositorioalumno.findOneBy({ email })
    // console.log(alumno)
    let pon = await bcrypt.compare(password, alumno?.password!!)
    if (!alumno || !pon) {
      throw new UnauthorizedException('Credenciales inválidas')
    }
    const token = jwt.sign(
      {
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        email: alumno.email,
        edad: alumno.edad
      },
      process.env.SECRET_TOKEN!
    )
    return { token   ,  pass:true }
  }  

  
  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
