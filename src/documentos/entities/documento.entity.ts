import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Examan } from "../../examen/entities/examan.entity.js";
import type { Relation } from "typeorm"


@Entity()
export class Documento {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "varchar", length: 255 })
	nombreArchivo!: string;

	// Guarda la ruta o URL del PDF, no su contenido binario.
	@Column({ type: "text" })
	rutaArchivo!: string;

	@Column({ type: "varchar", length: 100, default: "application/pdf" })
	tipoMime!: string;

	@Column({ type: "int" })
	cantidadPaginas!: number;

	@CreateDateColumn()
	fechaSubida!: Date;

	@ManyToOne(() => Examan, (exa) => exa.documentos, {
		eager: false,
		cascade: true,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	examan: Relation<Examan>

}
