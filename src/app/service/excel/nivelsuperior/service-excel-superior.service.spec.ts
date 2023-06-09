import { TestBed } from '@angular/core/testing';

import { ServiceExcelSuperiorService } from './service-excel-superior.service';

describe('ServiceExcelSuperiorService', () => {
  let service: ServiceExcelSuperiorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExcelSuperiorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
