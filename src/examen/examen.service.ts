import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamanDto } from './dto/create-examan.dto.js';
import { UpdateExamanDto } from './dto/update-examan.dto.js';
import { Examan } from '../examen/entities/examan.entity.js';
import { CursoService } from '../curso/curso.service.js';
import { DocumentosService } from '../documentos/documentos.service.js';

@Injectable()
export class ExamenService {
  constructor(
    @InjectRepository(Examan)
    private readonly examenRepository: Repository<Examan>,
    private readonly CursoServices: CursoService,
    private readonly PdfServices: DocumentosService
  ) { }
  async create(createExamanDto: CreateExamanDto, file: Express.Multer.File) {
    const { curso } = createExamanDto
    let data = await this.CursoServices.create({
      nombre: curso
    })

    let crear = this.examenRepository.create({
      titulo: createExamanDto.titulo,
      descripcion: createExamanDto.descripcion,
      fecha: createExamanDto.fecha,
      duracionMinutos: createExamanDto.duracionMinutos,
      anio: createExamanDto.anio,

    })

    await this.examenRepository.save(crear)

    console.log('el usuario ID es ' + crear.id)

    await this.PdfServices.create({
      cantidadPaginas: 100,
      nombreArchivo: file.originalname,
      tipoMime: file.mimetype,
      rutaArchivo: file.path,
      examanId: crear.id
    })
    return 'This action adds a new examan';


  }

  findAll() {
    return `This action returns all examen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examan`;
  }

  update(id: number, updateExamanDto: UpdateExamanDto) {
    return `This action updates a #${id} examan`;
  }

  remove(id: number) {
    return `This action removes a #${id} examan`;
  }
}
