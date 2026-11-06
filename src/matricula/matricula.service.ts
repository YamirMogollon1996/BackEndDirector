import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto.js';
import { UpdateMatriculaDto } from './dto/update-matricula.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Matricula } from './entities/matricula.entity.js';
import { Repository } from 'typeorm';        
@Injectable()
export class MatriculaCrud {
	constructor(
		@InjectRepository(Matricula)
		private readonly matriculaRepository: Repository<Matricula>,
	) {}

	create(data: Partial<Matricula>): Promise<Matricula> {
		return this.matriculaRepository.save(this.matriculaRepository.create(data));
	}

	findAll(): Promise<Matricula[]> {
		return this.matriculaRepository.find();
	}

	async findOne(id: number): Promise<Matricula> {
		const matricula = await this.matriculaRepository.findOneBy({ id });
		if (!matricula) {
			throw new NotFoundException(`Matrícula ${id} no encontrada`);
		}
		return matricula;
	}

	async update(id: number, data: Partial<Matricula>): Promise<Matricula> {
		const matricula = await this.findOne(id);
		this.matriculaRepository.merge(matricula, data);
		return this.matriculaRepository.save(matricula);
	}

	async remove(id: number): Promise<Matricula> {
		const matricula = await this.findOne(id);
		return this.matriculaRepository.remove(matricula);
	}
}
