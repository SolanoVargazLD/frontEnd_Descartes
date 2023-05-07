import { TestBed } from '@angular/core/testing';

import { ServiceTipSearchNivelBasicService } from './service-tip-search-nivel-basic.service';

describe('ServiceTipSearchNivelBasicService', () => {
  let service: ServiceTipSearchNivelBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTipSearchNivelBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
