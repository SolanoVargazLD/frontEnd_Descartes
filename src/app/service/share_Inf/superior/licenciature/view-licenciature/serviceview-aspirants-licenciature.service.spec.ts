import { TestBed } from '@angular/core/testing';

import { ServiceviewAspirantsLicenciatureService } from './serviceview-aspirants-licenciature.service';

describe('ServiceviewAspirantsLicenciatureService', () => {
  let service: ServiceviewAspirantsLicenciatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceviewAspirantsLicenciatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
