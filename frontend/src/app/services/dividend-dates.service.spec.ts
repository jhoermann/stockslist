import { TestBed } from '@angular/core/testing';

import { DividendDatesService } from './dividend-dates.service';

describe('DividendDatesService', () => {
  let service: DividendDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DividendDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
