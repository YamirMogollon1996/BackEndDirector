import { Test, TestingModule } from '@nestjs/testing';
import { MatriculaController } from './matricula.controller.js';
import { MatriculaCrud } from './matricula.service.js';

describe('MatriculaController', () => {
  let controller: MatriculaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatriculaController],
      providers: [MatriculaCrud],
    }).compile();

    controller = module.get<MatriculaController>(MatriculaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
