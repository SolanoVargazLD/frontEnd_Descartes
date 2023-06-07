import { TestBed } from '@angular/core/testing';

import { ServiceAdministrativeService } from './service-administrative.service';

describe('ServiceAdministrativeService', () => {
  let service: ServiceAdministrativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdministrativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
