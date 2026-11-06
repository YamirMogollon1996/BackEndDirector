import { Test, TestingModule } from '@nestjs/testing';
import { RespuestasController } from './respuestas.controller.js';
import { RespuestasService } from './respuestas.service.js';

describe('RespuestasController', () => {
  let controller: RespuestasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RespuestasController],
      providers: [RespuestasService],
    }).compile();

    controller = module.get<RespuestasController>(RespuestasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
