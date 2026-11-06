import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ExamenService } from './examen.service.js';
import { CreateExamanDto } from './dto/create-examan.dto.js';
import { UpdateExamanDto } from './dto/update-examan.dto.js';
import { Multer } from "multer"
import { FileInterceptor } from '@nestjs/platform-express';
import { Upload, Limits } from './Helpers/MulterArchivos.js'
@Controller('examen')
export class ExamenController {
  constructor(private readonly examenService: ExamenService) { }
  @Post()
  @UseInterceptors(FileInterceptor('documento',
    {
      storage: Upload,
      limits: Limits
    }
  ))
  create(@Body() createExamanDto: CreateExamanDto, @UploadedFile() file: Express.Multer.File) {
   
    return this.examenService.create(createExamanDto ,  file);
  }

  @Get()
  findAll() {
    return this.examenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamanDto: UpdateExamanDto) {
    return this.examenService.update(+id, updateExamanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenService.remove(+id);
  }
}
