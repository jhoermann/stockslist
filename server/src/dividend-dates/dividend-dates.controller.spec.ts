import { Test, TestingModule } from '@nestjs/testing';
import { DividendDatesController } from './dividend-dates.controller';

describe('DividendDates Controller', () => {
  let controller: DividendDatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DividendDatesController],
    }).compile();

    controller = module.get<DividendDatesController>(DividendDatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
