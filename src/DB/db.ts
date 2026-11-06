import { DataSource } from "typeorm"
import { Alumno } from "../alumno/entities/alumno.entity.js"
import { Matricula } from "../matricula/entities/matricula.entity.js"
import { Examan } from "../examen/entities/examan.entity.js"
import { Pregunta } from "../preguntas/entities/pregunta.entity.js"
import { Documento } from "../documentos/entities/documento.entity.js"    
import dotenv from "dotenv"
import { Respuesta } from "../respuestas/entities/respuesta.entity.js"
import { Curso } from "../curso/entities/curso.entity.js"


dotenv.config() 


export let appdb = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: process.env.PASSWORD || 'admin',
    database: 'Mogollon',
    entities: [Alumno, Matricula  , Examan , Pregunta , Documento ,  Respuesta   , Curso],
    migrations: ['src/migrations/**/*{.js,.ts}'],


})