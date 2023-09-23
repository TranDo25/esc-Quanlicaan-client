import { TestBed } from '@angular/core/testing';

import { DangkycaanService } from './dangkycaan.service';

describe('DangkycaanService', () => {
  let service: DangkycaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DangkycaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
