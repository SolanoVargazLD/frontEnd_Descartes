import { TestBed } from '@angular/core/testing';

import { ServiceExcelMediaService } from './service-excel-media.service';

describe('ServiceExcelMediaService', () => {
  let service: ServiceExcelMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExcelMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
