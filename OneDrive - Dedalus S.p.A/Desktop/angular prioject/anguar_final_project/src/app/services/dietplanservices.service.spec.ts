import { TestBed } from '@angular/core/testing';

import { DietplanservicesService } from './dietplanservices.service';

describe('DietplanservicesService', () => {
  let service: DietplanservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietplanservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
