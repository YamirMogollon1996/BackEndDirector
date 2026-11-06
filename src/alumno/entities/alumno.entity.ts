import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"  
export enum RolAlumno {
	ADMINISTRADOR = "administrador",
	DIRECTOR = "director",
	PROFESOR = "profesor", 
}   

@Entity()
export class Alumno {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ length: 100 })
	nombre: string;

	@Column({ length: 100 })
	apellido: string;

	@Column({ unique: true, length: 150 })
	email: string;

	@Column({ type: "int" })
	edad: number;

	@Column({ length: 255 })
	password: string;

	@Column({ type: "enum", enum: RolAlumno })
	role: RolAlumno;

}
