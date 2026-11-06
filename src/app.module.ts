import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AlumnoModule } from './alumno/alumno.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from "./alumno/entities/alumno.entity.js"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { MatriculaModule } from './matricula/matricula.module.js';
import { Matricula } from './matricula/entities/matricula.entity.js';
import { MailerModule } from "@nestjs-modules/mailer"
import { DocumentosModule } from './documentos/documentos.module.js';
import { CursoModule } from './curso/curso.module.js';
import { ExamenModule } from './examen/examen.module.js';
import { PreguntasModule } from './preguntas/preguntas.module.js';
import { RespuestasModule } from './respuestas/respuestas.module.js';
import { Documento } from './documentos/entities/documento.entity.js';
import { Examan } from './examen/entities/examan.entity.js';
import { Pregunta } from './preguntas/entities/pregunta.entity.js';
import { Respuesta } from './respuestas/entities/respuesta.entity.js';
import { Curso } from './curso/entities/curso.entity.js';
// import { AnioModule  } from './anio/anio.module.js'
@Module({
  //aca  las carga defrente 
  imports: [  
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'admin',
      database: 'Mogollon',
      entities: [Alumno, Matricula , Documento, Examan, Pregunta, Respuesta ,  Curso],
      // synchronize: true
    }), 

    //usefacorty primera carga las variables y luego la lee
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configservice: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: configservice.get<string>('CORREO_ENVIAR'),
            pass: configservice.get<string>('CONTRASENIA_APP'),
          }
        }
      })
    }),
    AlumnoModule,
    MatriculaModule,
    DocumentosModule,
    CursoModule,
    ExamenModule,
    PreguntasModule,
    RespuestasModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
