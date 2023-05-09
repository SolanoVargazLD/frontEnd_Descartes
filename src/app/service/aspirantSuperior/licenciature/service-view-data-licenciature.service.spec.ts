import { TestBed } from '@angular/core/testing';

import { ServiceViewDataLicenciatureService } from './service-view-data-licenciature.service';

describe('ServiceViewDataLicenciatureService', () => {
  let service: ServiceViewDataLicenciatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceViewDataLicenciatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
