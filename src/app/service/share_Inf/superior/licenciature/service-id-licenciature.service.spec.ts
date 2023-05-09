import { TestBed } from '@angular/core/testing';

import { ServiceIdLicenciatureService } from './service-id-licenciature.service';

describe('ServiceIdLicenciatureService', () => {
  let service: ServiceIdLicenciatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIdLicenciatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
