import { TestBed } from '@angular/core/testing';

import { ServiceExcelSuperiorPostService } from './service-excel-superior-post.service';

describe('ServiceExcelSuperiorPostService', () => {
  let service: ServiceExcelSuperiorPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExcelSuperiorPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
