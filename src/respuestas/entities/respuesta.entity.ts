import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn, 
    
} from 'typeorm'; 

import    type {  Relation} from "typeorm"

import { Pregunta } from '../../preguntas/entities/pregunta.entity.js';

@Entity()
export class Respuesta {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	contenido: string;

	@ManyToOne(() => Pregunta, pre  => pre.respuesta)
	@JoinColumn({ name: 'preguntaId' })
	pregunta: Relation< Pregunta>;
}
