import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Entity('matriculas')
export class Matricula {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	alumnoId!: number;

	@Column()
	cursoId!: number;

	@Column({ type: 'date' })
	fechaMatricula!: Date;


}

