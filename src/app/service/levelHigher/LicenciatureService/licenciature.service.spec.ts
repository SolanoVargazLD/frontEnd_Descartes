import { TestBed } from '@angular/core/testing';

import { LicenciatureService } from './licenciature.service';

describe('LicenciatureService', () => {
  let service: LicenciatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenciatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
