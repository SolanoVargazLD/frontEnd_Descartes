import { TestBed } from '@angular/core/testing';

import { ServiceIdAspirantService } from './service-id-aspirant.service';

describe('ServiceIdAspirantService', () => {
  let service: ServiceIdAspirantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIdAspirantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
