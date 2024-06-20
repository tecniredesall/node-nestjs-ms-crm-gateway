import { Test, TestingModule } from '@nestjs/testing';
import { ProductionUnitService } from './production-unit.service';

describe('ProductionUnitService', () => {
  let service: ProductionUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductionUnitService],
    }).compile();

    service = module.get<ProductionUnitService>(ProductionUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
