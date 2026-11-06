import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto.js';
import { UpdateCursoDto } from './dto/update-curso.dto.js';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CursoService {

  constructor(
    @InjectRepository(Curso)
    private readonly ServicioComunicacion: Repository<Curso>) { }
  async create(createCursoDto: CreateCursoDto) {


    let Com = await this.ServicioComunicacion.create(createCursoDto)
    return this.ServicioComunicacion.save(Com)


  }

  findAll() {
    return `This action returns all curso`;
  }
  
  findOne(id: number) {
    return `This action returns a #${id} curso`;  
  
  
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }     

  async EncontrarPorNombre (  nom :  string) {

        let  encontrado  =await  this.ServicioComunicacion.findOne({ where:{nombre :   nom}})    
        if ( encontrado)  throw new NotFoundException('curso no encontrado') 
        return encontrado

  }
}
