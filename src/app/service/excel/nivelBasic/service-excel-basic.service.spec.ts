import { TestBed } from '@angular/core/testing';

import { ServiceExcelBasicService } from './service-excel-basic.service';

describe('ServiceExcelBasicService', () => {
  let service: ServiceExcelBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExcelBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
