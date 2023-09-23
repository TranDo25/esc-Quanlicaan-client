import { TestBed } from '@angular/core/testing';

import { PhongbanserviceService } from './phongbanservice.service';

describe('PhongbanserviceService', () => {
  let service: PhongbanserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhongbanserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
