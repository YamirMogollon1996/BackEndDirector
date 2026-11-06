import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import type { Relation } from "typeorm"
import { Examan } from '../../examen/entities/examan.entity.js'
import { Respuesta } from "../../respuestas/entities/respuesta.entity.js"
// import  type {  Relation}  from "typeorm"
// console.log(Examan)

@Entity()
export class Pregunta {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    enunciado: string;
    @ManyToOne(() => Examan, (examen) => examen.preguntas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'examenId' })
    examen: Relation<Examan>

    @OneToMany(() => Respuesta, (res) => res.pregunta)
    respuesta: Relation<Respuesta[]>;


}
