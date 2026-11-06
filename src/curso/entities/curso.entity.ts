import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Examan } from '../../examen/entities/examan.entity.js'
import  type {Relation }  from "typeorm"
@Entity()
export class Curso {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@OneToMany(() => Examan, (examen) => examen.curso)
	examenes: Relation< Examan[]>;
}




// relacion entre examen y curso  
// un curso tiene varios exameen y examen le pertece a un curso 

