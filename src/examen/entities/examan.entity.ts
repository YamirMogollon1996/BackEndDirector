import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm'
import { Pregunta } from "../../preguntas/entities/pregunta.entity.js"
import type { Relation } from "typeorm"
import { Curso } from '../../curso/entities/curso.entity.js'
import { Documento } from '../../documentos/entities/documento.entity.js'  


@Entity()
export class Examan {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  titulo: string

  @Column({ type: 'text', nullable: true })
  descripcion: string | null

  @Column({ type: 'date' })
  fecha: Date

  @Column()
  anio: number

  @Column({ type: 'int' })
  duracionMinutos: number

  @OneToMany(() => Pregunta, (pregunta) => pregunta.examen)
  @JoinColumn({
    name: 'examenid',
  })

  preguntas: Relation<Pregunta[]>;

  @ManyToOne(() => Curso, (cur) => cur.examenes
    , {
      eager: false,
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  )
  curso: Relation<Curso>;

  @OneToMany(() => Documento, (doc) => doc.examan)
  documentos: Relation<Documento[]>;


}
