import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentoDto } from './dto/create-documento.dto.js';
import { UpdateDocumentoDto } from './dto/update-documento.dto.js';
import { Documento } from './entities/documento.entity.js';

@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(Documento)
    private readonly documentoRepository: Repository<Documento>,
  ) { }


  async create(createDocumentoDto: CreateDocumentoDto) {
    let crear = await this.documentoRepository.create({
      cantidadPaginas: createDocumentoDto.cantidadPaginas,
      nombreArchivo: createDocumentoDto.nombreArchivo,
      rutaArchivo: createDocumentoDto.rutaArchivo,
      tipoMime: createDocumentoDto.tipoMime
    }) 


    return await this.documentoRepository.save( crear)

  }

  findAll() {
    return `This action returns all documentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documento`;
  }

  update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
    return `This action updates a #${id} documento`;
  }

  remove(id: number) {
    return `This action removes a #${id} documento`;
  }
}
