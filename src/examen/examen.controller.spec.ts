import { Test, TestingModule } from '@nestjs/testing';
import { ExamenController } from './examen.controller.js';
import { ExamenService } from './examen.service.js';

describe('ExamenController', () => {
  let controller: ExamenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamenController],
      providers: [ExamenService],
    }).compile();

    controller = module.get<ExamenController>(ExamenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
