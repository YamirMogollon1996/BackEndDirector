import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from "@nestjs/common"
import {  ConfigModule  } from "@nestjs/config"
import { appdb } from './DB/db.js';     
import { Alumno } from './alumno/entities/alumno.entity.js';  
import { getRepositoryToken } from '@nestjs/typeorm'; 


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform:true
    }),
  )
    try {
    await appdb.initialize()
    console.log('iniciado *********')
  
    console.log('base de datos correctas')
    await app.listen(process.env.PORT ?? 3000);

  } catch (error) {
      console.log(error)
}
}
await bootstrap()