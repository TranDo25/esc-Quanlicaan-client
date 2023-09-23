import { TestBed } from '@angular/core/testing';

import { FilterThongketheongayService } from './filter-thongketheongay.service';

describe('FilterThongketheongayService', () => {
  let service: FilterThongketheongayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterThongketheongayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
